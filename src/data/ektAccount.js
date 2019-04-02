import AES from 'aes-oop';
import setting from './setting';   //用户基本设置
import ektData from './ektData';   //离线状态用户数据缓存
import keyItem from './keyItem';   //私钥地址存储，

export default class ektAccount{
    constructor() {
        this.keyItem =  new keyItem() ;
        this.setting = new setting();
        this.ektData = new ektData();
    }

    static newFn(){
        return new ektAccount();
    }

    static mergeFn(json){
        let p = Object.assign(this.newFn(), json);
        console.log(json)
        if(json.hasOwnProperty('keyItem')){
            p.keyItem = (typeof json.keyItem === 'string')
                ? json.keyItem : keyItem.mergeFn(json.keyItem);
        }
        return p;
    }
    isEncrypted(){
        return typeof this.keyItem !== 'object'
    }

    decrypt(seed){
        if(this.isEncrypted()) this.keyItem = AES.decrypt(this.keyItem, seed);
    }

    encrypt(seed){
        if(!this.isEncrypted()) this.keyItem = AES.encrypt(this.keyItem, seed);
    }


}

import AES from 'aes-oop';
import CryptoJS from 'crypto-js';

export default class keyItem {

    constructor(){
        this.privateKey = '';
        this.keyStore = {
            "address":"",
            "privateKey":{
                "version":1,
                "encryptData":""
            }
        };
    }

    static newFn(){ return new keyItem()}

    static mergeFn(json){
        return Object.assign(this.newFn(), json);
    }

    unique(){ return `${this.blockchain}:${this.publicKey.toLowerCase()}`; }

    isEncrypted(){
        if (this.privateKey.length != 64) return true;
        return false ;
    }

    encrypt(seed){
        if(!this.isEncrypted())
            this.privateKey = AES.encrypt(this.privateKey, seed);
    }

    decrypt(seed){
        if(this.isEncrypted())
            this.privateKey = AES.decrypt(this.privateKey, seed);
    }

    ketStoreEncrypt(key) {
        let arrNum = new Buffer(key);
        let sha3_1 = new jsSHA('SHA3-256','ARRAYBUFFER');
        let u8a1 = new Uint8Array(32);
        sha3_1.update(ad);
        u8a1 = sha3_1.getHash('ARRAYBUFFER');
        let result = new Buffer(u8a1).slice(0,16).toString();
        this.encrypt();
        let decode = CryptoJS.AES.encrypt(this.privateKey, result);
        return decode
    }

    ketStoreDecrypt() {

    }
}


export default class ektData {

    constructor(){
        this.ektExList = [];
        this.address = '';
        this.realAccount = false;  // 默认此结构体是没有私钥的,只是数据的占位
    }

    static newFn(){ return new ektData(); }

}

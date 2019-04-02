import {LocalStream} from 'extension-streams';
import EktAccount from './data/ektAccount';
import * as Bridge from '@/data/bridgeWord.js'
import AES from 'aes-oop';
import storage from '@/util/storage.js'
import utils from './util/utils'
let seed = '';
let ektAccount = {} ;
export default class background {
    constructor() {
        //监听b 、p、c通信
        this.messagePass();
    }

    //保存用户输入的密码生成的seed
    messagePass() {
        LocalStream.watch((req, cb) => {
            this.handleMsg(req, cb)
        })
    }

    handleMsg(msg, rspcb) {
        switch(msg.type) {
            case Bridge.ISLOCK:   this.isLock(rspcb); break;
            case Bridge.SET_SEED:   this.setseed(rspcb, msg.data); break;
            case Bridge.UP_ACCOUNT:   this.saveAccount(rspcb, msg.data); break;
            case Bridge.IMPORT_ACCOUNT:   this.importaccount(rspcb); break;
            case Bridge.REMOVE_SEED:   this.removeseed(rspcb); break;
            case Bridge.LOAD_EKT:   this.loadEkt(rspcb); break;
            case "getsign":   this.getSign(rspcb, msg.data); break;
        }
    }

    isLock(respcb) {
        if (seed.length > 0) {
            storage.get().then(accountData => {
                let account = accountData.keyItem;
                try{
                    AES.decrypt(account, seed);
                    respcb(typeof account == 'object')
                }catch(e){
                    //捕获到错误之后就说明揭秘失败
                    console.log(e);
                    seed = '' ;
                    respcb(true);
                }

            })
            return false;
        }
        else respcb(true);
    }

    setseed(rspcb, seeds){
        seed = seeds;
        rspcb()
    }

    loadEkt(rspcb) {
        storage.get().then(ektAccount => {
            if (!seed.length) {return rspcb(ektAccount)}
            ektAccount.decrypt(seed);
            rspcb(ektAccount)
        })
    }

    removeseed(rspcb) {
        // seed = '';
        rspcb()
    }

    saveAccount (rspcb, ektAccount) {
        let ektBody = EktAccount.mergeFn(ektAccount);
        ektBody.keyItem.encrypt(seed);
        ektBody.encrypt(seed);
        storage.save(ektBody).then(res => {
            ektBody.decrypt(seed);
            rspcb(ektBody)
        })
    }

    importaccount(rspcb) {
        //拿到加密的account
        storage.get().then(res => {
            const account = AES.decrypt(res.keyList, seed);
            rspcb(account)
        })
    }

    getSign(rspcb, data) {

         storage.get().then( res => {
            const account = AES.decrypt(res.ektAccount, seed);
            let date = utils.signPriv(data, account.keyList[0].privateKey);

             rspcb(date);
             return true

        })


    }

}
const bg = new background();

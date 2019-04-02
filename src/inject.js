import {LocalStream} from 'extension-streams';
let callback = function(){};
export default class ekt{
    constructor (){

    }

    getSign(msg, cb) {
        callback = cb;
        window.postMessage({
            "methods" : "getSign",
            "params": msg
        }, "*")
    }
}

var ektAccount = new ekt();
window.ektAccount = ektAccount;


import AES from 'aes-oop'
const { randomBytes } = require('crypto');
const secp256k1 = require('secp256k1');
const jsSHA = require('jssha');
const HexadecimalStringDa = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const HexadecimalStringXiao = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
class utils {
    constructor () {
        this.setSha = this.setSha.bind(this)
        this.turnBacks = this.turnBacks.bind(this)
        this.keyPairs = this.keyPairs.bind(this)

    }

    isRightPrivate (key) {
        let rg = /^[0-9a-fA-F]{64}$/
        return rg.test(key);
    }

    encode (data, key) {

    }

    getKey(account, seed) {

    }

    setSha (data) {
        //第一次sha3_256
        let sha3_1 = new jsSHA('SHA3-256','ARRAYBUFFER');
        let u8a1 = new Uint8Array(32);
        sha3_1.update(data);
        u8a1 = sha3_1.getHash('ARRAYBUFFER');
        let result1 = new Buffer(u8a1);

        // 'EKT'转化为buffer数组
        let EKT1 = new Buffer('EKT');
        //over

        //拼接EKT
        let u8a2 = new Uint8Array(35);
        EKT1.copy(u8a2,0,0,3);
        result1.copy(u8a2,3,0,32);
        let u8a2Buffer = new Buffer(u8a2);

        //第二次sha3_256
        let sha3_2 = new jsSHA('SHA3-256','ARRAYBUFFER')
        sha3_2.update(u8a2Buffer);
        let u8a3 = new Uint8Array(32);
        u8a3 = sha3_2.getHash('ARRAYBUFFER');
        let result2 = new Buffer(u8a3);

        //第三次sha3_256
        let sha3_3 = new jsSHA('SHA3-256','ARRAYBUFFER');
        sha3_3.update(result2);
        let u8a4 = new Uint8Array(32);
        u8a4 = sha3_3.getHash('HEX');

        return u8a4
    }

    turnBacks(string64) {
        let Array64String = string64.split('')
        let Array64Number = [];
        let Array32Number = [] ;
        //将64位字符串转化为长度为64的数字数组
        for(let i = 0 ; i < Array64String.length ; i ++){
            for(let j = 0 ; j < 16 ; j ++){
                if(Array64String[i] === HexadecimalStringDa[j] || Array64String[i] === HexadecimalStringXiao[j]){
                    Array64Number.push(j)
                }
            }
        }
        //将长度为64的数字数组转化为长度为32的数字数组
        for(let i = 0 ; i < Array64Number.length ; i+=2){
            let j = i + 1 ;
            let number256 = Array64Number[i] * 16 + Array64Number[j] ;
            Array32Number.push(number256);
        }
        let u8a = new Uint8Array(Array32Number.length);
        u8a.set(Array32Number);
        let backBuffer = new Buffer(u8a)
        return backBuffer ;
    }

    keyPairs (dataPri) {
        let datas = this.turnBacks(dataPri)
        let pubKey = secp256k1.publicKeyCreate(datas, false) ;
        let addressSha256 = this.setSha(pubKey);
        return addressSha256
    }



    changeToH (Array32) {
        let string64 =[] ;
        for(let i = 0 ; i < Array32.length ; i ++){
            let sixteen = Math.floor(Array32[i]/16);
            //十位
            let decade = HexadecimalStringXiao[sixteen]
            //个位
            let unit = HexadecimalStringXiao[Array32[i]-sixteen*16];

            //十位拼接个位
            let everyString = decade+unit;
            string64.push(everyString)
        }
        return string64.join('')
    }
    turnBack(string64) {
        let Array64String = string64.split('')
        let Array64Number = [];
        let Array32Number = [] ;
        //将64位字符串转化为长度为64的数字数组
        for(let i = 0 ; i < Array64String.length ; i ++){
            for(let j = 0 ; j < 16 ; j ++){
                if(Array64String[i] === HexadecimalStringDa[j] || Array64String[i] === HexadecimalStringXiao[j]){
                    Array64Number.push(j)
                }
            }
        }
        //将长度为64的数字数组转化为长度为32的数字数组
        for(let i = 0 ; i < Array64Number.length ; i+=2){
            let j = i + 1 ;
            let number256 = Array64Number[i] * 16 + Array64Number[j] ;
            Array32Number.push(number256);
        }
        let u8a = new Uint8Array(Array32Number.length);
        u8a.set(Array32Number);
        let backBuffer = new Buffer(u8a)
        return backBuffer ;
    }
    //签名验证
    signPriv (data, privkey) {
        console.log(data, privkey)
        console.log('大sb')
        //将交易信息变为buffer
        let txBuff = new Buffer(data);

        //私钥字符串变为buffer
        let privkeyBuff = this.turnBack(privkey);
        //交易buffer加密一次
        let sha3_1 = new jsSHA('SHA3-256','ARRAYBUFFER');
        let u8a1 = new Uint8Array(32);
        sha3_1.update(txBuff);
        u8a1 = sha3_1.getHash('ARRAYBUFFER');
        let result1 = new Buffer(u8a1);
        //签名
        let sigObj = secp256k1.sign(result1, privkeyBuff)

        let signBuffer = new Uint8Array(65);
        // signBuffer.set(sigObj.signature,sigObj.recovery)
        signBuffer.set(sigObj.signature);
        signBuffer[64]=sigObj.recovery;
        let signString = this.changeToH(signBuffer)
        return signString;
    }

    createPriv (){
        let privKey ;
        do {
            privKey = randomBytes(32)
        } while (!secp256k1.privateKeyVerify(privKey)) ;
        // get the public key in a compressed format
        const pubKey = secp256k1.publicKeyCreate(privKey, false) ;
        let addressSha256 = this.setSha(pubKey);
        let privKeyStringToHex = this.changeToH(privKey);
        let priData = {
            address : addressSha256,
            privateKey : privKeyStringToHex
        };
        return priData
    }

    /**
     * 获取网络情况，判断是否在线
     */
    isOnline() {

    }

}

export default  new utils()

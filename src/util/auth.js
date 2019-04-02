import * as Actions from '../store/constants';
import utils from '../util/utils';
export default class auth {
    constructor() {

        this.verifyAddress = this.verifyAddress.bind(this);
    }

    static verifyPassword(password, confirmPassword, context) {
        if (!/^\d{6}$/.test(password) || !/^\d{6}$/.test(confirmPassword)){
            context.$msg('当前输入密码包含特殊字符，请重新输入！');
            return false;
        }
        if (password.length < 6){
            context.$msg('密码长度不够6位，请重新输入！');
            return false;
        }
        if (password != confirmPassword) {
            context.$msg('前后密码不一致，请重新输入')
            return false;
        }
        return true;
    }

    static verifyRight (password, context){
        return new Promise(resolve => {
            context[Actions.SET_SEED](password).then(() => {
                context[Actions.LOCK_STATUS]().then(lockStatus => {
                    if (lockStatus) {
                        context.$msg('密码不正确')
                        resolve(false);
                    }
                    else {
                        resolve(true)
                    }
                })
            })
        })
    }

    static verifyPri(pri, oldAddress, context) {
        let _this = this;
        return new Promise(resolve => {
            let rg = /^[0-9a-fA-F]{64}$/;
            if (!rg.test(pri) || _this.verifyAddress(pri, oldAddress)) {
                context.$msg('私钥错误,请重新输入');
                resolve(false);
                return false;
            }else{
                resolve(true);
                return true;
            }
        })
    }

    /**
     *
     * @param pri
     * 根据私钥生成地址，比对地址是否相同
     */
    static verifyAddress (pri, oldAddress) {
        let newAddress = utils.keyPairs(pri);
        if (oldAddress == newAddress) return true;
        else return false;
    }


}


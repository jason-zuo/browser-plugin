import * as Actions from '@/store/constants.js'
import * as Bridge from '@/data/bridgeWord.js'
import {LocalStream} from 'extension-streams'
import ektAccount from '@/data/ektAccount'
import md5 from 'md5'
import AES from 'aes-oop';
import storage from '@/util/storage.js'
import utils from '@/util/utils.js'

export const actions = {
    [Actions.CREATE_DATA] ({state, commit, dispatch}, password){
        //创建ekt结构体,第一次创建插件
       return new Promise(resolve => {
           let account = new ektAccount();
           account.ektData.realAccount = true;            //说明开始创建真实数据
           let tmlData = utils.createPriv();
           account.keyItem.privateKey = tmlData.privateKey;
           account.ektData.address = tmlData.address;
           dispatch(Actions.SET_SEED, password).then(hashPass => {
               dispatch(Actions.SAVE_DATA, account).then(_account => {
                   commit(Actions.SET_DEFAULT, _account);
                    resolve();
               })
           })
       })
    },
    [Actions.LOAD_EKT] ({state, commit, dispatch}) {
        return new Promise(resolve => {
            commit(Actions.BRIDGE_DATA, {'type': Bridge.LOAD_EKT,'data':  null});
            LocalStream.send(state.bridgeData).then((ektAccount) => {
                commit(Actions.SET_DEFAULT, ektAccount);
                resolve(ektAccount);
            })
        })
    },
    [Actions.Key_SAVE] ({state, commit, dispatch}, keyList) {
        let ektAccount = state.ektAccount;
        ektAccount.keyList.push(keyList);
        dispatch(Actions.SAVE_DATA, ektAccount).then(res => {
            commit(Actions.SET_DEFAULT, res);
        })
    },
    [Actions.LOCK_STATUS] ({state, commit}){
        commit(Actions.BRIDGE_DATA, {'type': Bridge.ISLOCK,'data': null});
        return LocalStream.send(state.bridgeData);
    },
    [Actions.SET_SEED]({state, commit}, password) {
        return new Promise(resolve => {
            let hashPass = md5(password);
            commit(Actions.BRIDGE_DATA, {'type': Bridge.SET_SEED,'data':  hashPass});
            LocalStream.send(state.bridgeData).then(() => {
                resolve(hashPass)
            })
        })
    },
    [Actions.SAVE_DATA]({state, commit}, account){
        return new Promise(resolve => {
            commit(Actions.BRIDGE_DATA, {'type': Bridge.UP_ACCOUNT,'data': account});
            LocalStream.send(state.bridgeData).then((ektBody) => {
                resolve(ektBody);
            })
        })
    },
    [Actions.IMPORT_ACCOUNT]({state, commit}) {
        return new Promise(resolve => {
            commit(Actions.BRIDGE_DATA, {'type': Bridge.IMPORT_ACCOUNT,'data': null});
            LocalStream.send(state.bridgeData).then((res) => {
                commit(Actions.SET_DEFAULT, res);
                resolve();
            })
        })
    },
    [Actions.REMOVE_SEED]({state, commit}){
        return new Promise(resolve => {
            commit(Actions.BRIDGE_DATA, {'type': Bridge.REMOVE_SEED,'data': null});
            LocalStream.send(state.bridgeData).then((res) => {
                resolve();
            })
        })
    },
    [Actions.RESET_ACCOUNT]({state, commit, dispatch}, password){
        return new Promise(resolve => {
            storage.remove().then(res => {
                let account = new ektAccount();
                account.ektData.realAccount = true;
                account.keyItem.privateKey = state.tplPri ;
                account.ektData.address = utils.keyPairs(state.tplPri);
                dispatch(Actions.SET_SEED, password).then(hashPass => {
                    dispatch(Actions.SAVE_DATA, account).then(_account => {
                        commit(Actions.SET_DEFAULT, _account);
                        commit(Actions.SET_PRI, '');
                        resolve();
                    })
                })
            })
        })
    }
};


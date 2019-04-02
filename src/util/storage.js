import ektAccount from '../data/ektAccount'
export default class storage {
    constructor () {}

    static save(ektAccount) {
        return new Promise(resolve => {
            chrome.storage.local.set({ektAccount}, () => {
                resolve(ektAccount);
            })
        })
    }

    static get() {
        return new Promise(resolve => {
            chrome.storage.local.get('ektAccount', (possible) => {
                (possible.ektAccount) ? resolve(ektAccount.mergeFn(possible.ektAccount)) : resolve(new ektAccount())
            })
        })
    }

    static getstatic() {
            chrome.storage.local.get('ektAccount', (possible) => {
                console.log(possible)
                return possible;
            })
    }

    static remove(){
        return new Promise(resolve => {
            chrome.storage.local.remove('ektAccount', () => {
                resolve();
            });
        })
    }
}

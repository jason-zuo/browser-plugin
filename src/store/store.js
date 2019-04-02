import Vue from 'vue'
import Vuex from 'vuex';

import {mutations} from '@/store/mutations.js';
import {actions} from '@/store/actions.js';
Vue.use(Vuex);

const state = {
    bridgeData : {
        type: null ,
        data: null
    },
    ektAccount: {},
    tplPri: ''
};

const getters = {

};

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

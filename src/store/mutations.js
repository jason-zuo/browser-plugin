import * as Mutations from '@/store/constants.js'
export const mutations = {
    [Mutations.BRIDGE_DATA]: (state, data) => {state.bridgeData.type = data.type; state.bridgeData.data = data.data;},
    [Mutations.SET_DEFAULT]: (state, data) => {state.ektAccount = data},
    [Mutations.SET_PRI]: (state, data) => {state.tplPri = data},


}

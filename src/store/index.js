import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList:[],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            if (Array.isArray(payload)) {
                state.paymentsList.push(...payload)
            } else {
                state.paymentsList.push(payload)
            }
        }
    },
    getters: {},
    actions: {
        fetchData ({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        {
                            date: '28.03.2020',
                            category: 'Food',
                            value: 169,
                        },
                        {
                            date: '24.03.2020',
                            category: 'Transport',
                            value: 360,
                        },
                        {
                            date: '24.03.2020',
                            category: 'Food',
                            value: 532,
                        },
                    ])
                }, 1000)
            })
                .then(res => {
                    commit('setPaymentsListData', res)
                })
        },
    }

})

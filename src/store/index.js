import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import A from "./work.js"
import B from "./wx.js"
export default new Vuex.Store({
    // 基本使用
    state: {
        userName: "kepi",
        age: 0
    },
    getters: {
        newNum(state) {
            return state.userName + state.age
        }
    },
    mutations: {
        add(state, params) {
            state.age += params
        }
    },
    actions: {
        // context类似于this.$store
        send(context, params) {
            context.commit("add", params)
        }
    },
    modules: {
        A,
        B
    }
})

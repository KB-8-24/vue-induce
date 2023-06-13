export default {
  // 为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  namespaced: true,
  state: {
    a: 24
  },
  getters: {
    addA(state) {
      return state.a + 1
    }
  },
  mutations: {
    multiply(state) {
      console.log("mutations调用" + state.a)
    }
  },
  actions: {
    send({ state }) {
      console.log("actions调用" + state.a)
    }
  }
}

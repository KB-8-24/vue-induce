import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// element-ui 引入
import "@/plugins/element-ui"
// vue-quill-editor 富文本引入
import "@/plugins/vue-quill-editor"
// axios 引入
import "@/plugins/vue-axios"
// eventBus
Vue.prototype.$bus = new Vue()
// 引入动画
import "animate.css"
// 引入Tailwind CSS
// import "tailwindcss/tailwind.css"
// 引入全局组件
import "@/plugins/global-Components"
// 引入基础样式scss
import "@/assets/common/base.scss"



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

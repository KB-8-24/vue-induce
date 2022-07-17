import Vue from "vue"
import nextPage from "@/components/common/next-page.vue"
Vue.component("next-page", nextPage)
setTimeout(() => {
    console.log(Vue.prototype.$ke)
})
console.log(Vue.prototype.$ke)

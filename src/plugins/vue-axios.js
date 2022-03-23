import Vue from "vue"
import axios from "axios"
axios.defaults.withCredentials = true // 让ajax携带cookie
Vue.prototype.$axios = axios

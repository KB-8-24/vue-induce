/* eslint-disable no-unused-vars */
import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "@/views/page/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/refresh",
    name: "refresh",
    component: () => import("@/views/page/refresh.vue")
  },
  {
    path: "/page/element/form",
    component: () => import("@/views/page/element-ui/Form/el-form在el-table中的表单验证")
  },
  {
    path: "/page/element/Pagination",
    component: () => import("@/views/page/element-ui/Pagination/index.vue")
  },
  {
    path: "/page/eventbus",
    component: () => import("@/views/page/EventBus/busIndex")
  },
  {
    path: "/page/observable",
    component: () => import("@/views/page/Vue.observable/observableDemo"),
    children: [
      {
        path: "two",
        component: () => import("@/views/page/Vue.observable/observableDemo2")
      }
    ]
  },
  {
    path: "/page/orgchart",
    component: () => import("@/views/page/orgchart/orgchartDemo")
  },
  {
    path: "/page/VueQuillEditor",
    component: () => import("@/views/page/vue-quill-editor/VueQuillEditor2")
  },
  {
    path: "/page/upload",
    meta: [],
    component: () => import("@/views/page/upload/uploadDemo")
  },
  {
    path: "/page/vuex",
    component: () => import("@/views/page/vuex/vuexBasic")
  },
  {
    path: "/page/watch",
    component: () => import("@/views/page/vue-watch/watchIndex.vue")
  },
  {
    path: "/page/mixins",
    component: () => import("@/views/page/vue-mixins/mixins.vue")
  },
  {
    path: "/page/websocket",
    component: () => import("@/views/page/websocket/websocket")
  },
  {
    path: "/page/directive",
    component: () => import("@/views/page/v-directive/directive")
  },
  {
    path: "/page/lifecycle/A",
    component: () => import("@/views/page/lifecycle/indexA")
  },
  {
    path: "/page/lifecycle/B",
    component: () => import("@/views/page/lifecycle/indexB")
  },
  {
    path: "/page/lifecycle",
    component: () => import("@/views/page/lifecycle/home"),
    children: [
      {
        path: "/",
        name: "BtestA",
        component: () => import("@/views/page/lifecycle/indexA"),
        beforeEnter: (to, form, next) => {
          console.log("🍊 A beforeEnter")
          next()
        }
      },
      {
        path: "Btest",
        name: "BtestB",
        component: () => import("@/views/page/lifecycle/indexB"),
        beforeEnter: (to, form, next) => {
          console.log("🍊 B beforeEnter")
          next()
        }
      }
    ]
  },
  {
    path: "/page/transition",
    component: () => import("@/views/page/transition/index")
  },
  {
    path: "/page/slot",
    component: () => import("@/views/page/slot/father.vue")
  },
  {
    path: "/page/download",
    component: () => import("@/views/page/download/index.vue")
  },
  {
    path: "/page/render/1",
    component: () => import("@/views/page/render/基本使用")
  },
  {
    path: "/page/render/2",
    component: () => import("@/views/page/render/v-for使用")
  },
  {
    path: "/page/json-tree",
    component: () => import("@/views/page/json-tree/index.vue")
  },
  {
    path: "/page/recursion",
    component: () => import("@/views/page/递归组件使用/index.vue")
  },
  {
    path: "/page/elementTree",
    component: () => import("@/views/page/递归组件使用/element 动态菜单/index.vue")
  },
  {
    path: "*",
    component: () => import("@/views/page/404")
  },
  {
    path: "/page/scoped",
    component: () => import("@/views/page/element-ui/scoped/P.vue")
  },
  {
    path: "/page/vreify",
    component: () => import("@/views/page/正则密码校验/verify.vue")
  },
  // 动态组件
  {
    path: "/page/isComponent",
    component: () => import("@/views/page/vue动态组件/index.vue")
  },
  // 组件封装
  {
    path: "/page/syncComponent",
    component: () => import("@/views/page/组件封装/index.vue")
  },
  // UI 组件的二次封装
  {
    path: "/page/newComponents",
    component: () => import("@/views/page/组件封装/UI 组件二次封装/index.vue")
  },
  {
    path: "/page/v-model",
    component: () => import("@/views/page/组件封装/自定义组件使用v-model/index.vue")
  },
  {
    path: "/refreshDemo",
    component: () => import("@/views/page/刷新当前页面/index.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, form, next) => {
//   console.log("🌏 beforeEach")
//   next()
// })
// router.afterEach((to, form, next) => {
//   console.log("🌏 afterEach")
// })
export default router

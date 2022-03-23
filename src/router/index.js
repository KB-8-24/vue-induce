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
        path: "/page/element/form",
        component: () => import("@/views/page/element-ui/Form/el-form在el-table中的表单验证")
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
                path: "/page/observable/two",
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
        component: () => import("@/views/page/vue-quill-editor/VueQuillEditor")
    },
    {
        path: "/page/upload",
        component: () => import("@/views/page/upload/uploadDemo")
    },
    {
        path: "/page/vuex",
        component: () => import("@/views/page/vuex/vuexBasic")
    },
    {
        path: "/page/watch",
        component: () => import("@/views/page/vue-watch/watchIndex.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
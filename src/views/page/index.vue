<template>
    <div class="home">
        <header></header>
        <section>
            <nav>
                <img src="@/assets/page/images/logo.svg" alt="" />
                <h2>Vue.js</h2>
            </nav>
            <div>
                <router-link v-for="item in list" :key="item.path" :to="item.path"
                    ><el-button size="mini" type="primary" class="link_item">{{ item.name }}</el-button></router-link
                >
            </div>
        </section>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name: "VueIndex",

    data() {
        return {
            list: [
                {
                    path: "/page/eventbus",
                    name: "eventBus"
                },
                {
                    path: "/page/element/form",
                    name: "element表单验证"
                },
                {
                    path: "/page/observable",
                    name: "observable"
                },
                {
                    path: "/page/orgchart",
                    name: "vue-orgchart"
                },
                {
                    path: "/page/VueQuillEditor",
                    name: "VueQuillEditor"
                },
                {
                    path: "/page/upload",
                    name: "upload"
                },
                {
                    path: "/page/vuex",
                    name: "vuex"
                },
                {
                    path: "/page/watch",
                    name: "vue-watch"
                },
                {
                    path: "/page/mixins",
                    name: "vue-mixins"
                },
                {
                    path: "/page/websocket",
                    name: "websocket"
                },
                {
                    path: "/page/directive",
                    name: "vue-directive"
                },
                {
                    path: "/page/lifecycle",
                    name: "Vue 生命周期钩子"
                },
                {
                    path: "/page/transition",
                    name: "过渡动画"
                },
                {
                    path: "page/slot",
                    name: "作用域插槽"
                },
                {
                    path: "page/download",
                    name: "downloadjs 插件下载文件"
                },
                {
                    path: "page/render/1",
                    name: "vue render 函数使用"
                },
                {
                    path: "page/json-tree",
                    name: "扁平数据与树形数据相互转换"
                },
                {
                    path: "page/recursion",
                    name: "递归组件使用"
                },
                {
                    path: "/page/elementTree",
                    name: "element-ui动态菜单渲染"
                }
            ]
        }
    },
    mounted() {},

    methods: {}
}
</script>

<style lang="scss" scoped>
nav {
    width: 100px;
    height: 100px;
    text-align: center;
    margin: 100px auto;
}
.link_item {
    margin-right: 15px;
    margin-top: 10px;
}
header,
footer {
    // height: 10px;  // 会导致页面高度不够时，header 和 footer 消失
    min-height: 10px;
    width: 100%;
    background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
}
footer {
    background: linear-gradient(to right, #e02aff, #c12127, #ff4b01, #fb8817);
}

section {
    flex: 1;
}
.home {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
}
</style>

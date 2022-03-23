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
}
header,
footer {
    height: 10px;
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

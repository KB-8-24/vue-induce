<template>
    <div>
        <section>A组件</section>
        <router-link to="/page/lifecycle/B"><el-button type="success" size="mini">跳转B</el-button></router-link>
    </div>
</template>

<script>
export default {
    name: "VueInduceIndexA",

    data() {
        return {}
    },
    beforeCreate() {
        console.log("A beforeCreate")
    },
    created() {
        console.log("A created")
    },
    beforeMount() {
        console.log("A beforeMount")
    },
    mounted() {
        console.log("A mounted")
    },
    beforeDestroy() {
        console.log("A beforeDestroy")
    },
    destroyed() {
        console.log("A destroyed")
    },
    // keep-alive组件激活时调用
    activated() {
        console.log("🚀 A activated")
    },
    // keep-alive组件停用时调用
    deactivated() {
        console.log("🚀 A deactivated")
    },
    // 组件内路由守卫
    beforeRouteEnter(to, form, next) {
        console.log("⛵ A beforeRouteEnter")
        next()
    },
    beforeRouteUpdate(to, form, next) {
        console.log("⛵ A beforeRouteUpdate")
        next()
    },
    beforeRouteLeave(to, form, next) {
        console.log("⛵ A beforeRouteLeave")
        next()
    }
}
</script>

<style lang="scss" scoped></style>

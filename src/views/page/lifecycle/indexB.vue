<template>
    <div>
        <section>B组件</section>
        <router-link to="/page/lifecycle/A"><el-button type="success" size="mini">跳转A</el-button></router-link>
    </div>
</template>

<script>
export default {
    name: "VueInduceIndexB",

    data() {
        return {}
    },
    beforeCreate() {
        console.log("B beforeCreate")
    },
    created() {
        console.log("B created")
    },
    beforeMount() {
        console.log("B beforeMount")
    },
    mounted() {
        console.log("B mounted")
    },
    beforeDestroy() {
        console.log("B beforeDestroy")
    },
    destroyed() {
        console.log("B destroyed")
    },
    // keep-alive组件激活时调用
    activated() {
        console.log("🚀 B activated")
    },
    // keep-alive组件停用时调用
    deactivated() {
        console.log("🚀 B deactivated")
    }
}
</script>

<style lang="scss" scoped></style>

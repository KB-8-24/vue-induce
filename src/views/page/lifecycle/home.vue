<template>
    <div>
        <router-link to="/page/lifecycle"><el-button type="text" size="medium">A组件</el-button></router-link> |
        <router-link to="/page/lifecycle/Btest"><el-button type="text" size="medium">B组件</el-button></router-link>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "VueInduceHome",

    data() {
        return {}
    },

    mounted() {},

    methods: {}
}
</script>

<style lang="scss" scoped></style>

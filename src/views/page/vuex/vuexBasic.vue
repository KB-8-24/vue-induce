<template>
    <div>
        <div>
            <span>vuex store：</span>
            <span>{{ num }}</span>
        </div>
        <div>
            <span>vuex getters：</span>
            <span>{{ Getters() }}</span>
        </div>
        <el-button type="primary" size="mini" @click="addM">mutations ++</el-button>
        <el-button type="success" size="mini" @click="addA">actions ++</el-button>
    </div>
</template>

<script>
export default {
    // 基本使用
    data() {
        return {
            num: ""
        }
    },
    created() {
        this.num = this.$store.state
        // 模块化使用
        console.log(this.$store.state.A.a)
        console.log(this.$store.getters["A/addA"])
        this.$store.commit("A/multiply")
        this.$store.dispatch("A/send")
    },
    methods: {
        // 主体使用
        addM() {
            this.$store.commit("add", 10)
        },
        addA() {
            this.$store.dispatch("send", 100)
        },
        Getters() {
            return this.$store.getters.newNum
        }
    }
}
</script>

<style lang="scss" scoped></style>

<template>
    <div>
        <el-button @click="send" size="mini" type="primary">发送</el-button>
    </div>
</template>

<script>
export default {
    name: "busA",
    data() {
        return {}
    },
    methods: {
        send() {
            this.$bus.$emit("mes", new Date().getTime())
        }
    }
}
</script>

<style scoped></style>

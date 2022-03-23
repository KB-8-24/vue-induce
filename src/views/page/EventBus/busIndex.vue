<template>
    <div style="width: 300px">
        <el-card>
            <div>组件A</div>
            <bus-a></bus-a>
        </el-card>
        <el-card>
            <div>组件B</div>
            <bus-b></bus-b>
        </el-card>
    </div>
</template>

<script>
import busA from "@/views/page/EventBus/busA"
import busB from "@/views/page/EventBus/busB"
export default {
    name: "busIndex",
    components: {
        busA,
        busB
    },
    methods: {}
}
</script>

<style scoped></style>

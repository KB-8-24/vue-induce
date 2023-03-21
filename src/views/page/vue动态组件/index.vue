<template>
    <div style="padding: 20px">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="oneComponent"></el-tab-pane>
            <el-tab-pane label="配置管理" name="twoComponent"></el-tab-pane>
            <el-tab-pane label="角色管理" name="threeComponent"></el-tab-pane>
        </el-tabs>
        <keep-alive include="oneComponent,threeComponent">
            <component :is="activeName"></component>
        </keep-alive>
    </div>
</template>

<script>
import oneComponent from "./components/oneComponent"
import twoComponent from "./components/twoComponent"
import threeComponent from "./components/threeComponent"
export default {
    name: "VueInduceComponent",
    components: {
        oneComponent,
        twoComponent,
        threeComponent
    },
    data() {
        return {
            activeName: "oneComponent"
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>

<style lang="scss" scoped></style>

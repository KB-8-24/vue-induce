<template>
    <div>
        <el-button type="primary" size="mini" @click="show = !show">显示/隐藏</el-button>
        <!-- 单独使用animate -->
        <!-- <div class="goodlist animate__animated animate__backInRight" v-show="show">
            <div>内容 盒子</div>
        </div> -->
        <!-- 如果进入和离开的动画都需要设置 可以在盒子外面加一个transtion vue自带的属性 -->
        <transition enter-active-class="animate__backInLeft" leave-active-class="animate__backOutLeft">
            <div class="goodlist animate__backInLeft" v-show="show">内容盒子</div>
        </transition>
        这样进出都可以有动画了
    </div>
</template>

<script>
export default {
    name: "VueInduceIndex",

    data() {
        return {
            show: true
        }
    },

    mounted() {},

    methods: {}
}
</script>

<style lang="scss" scoped>
.goodlist {
    width: 200px;
    height: 200px;
    background: red;
    animation-duration: 1s; //设置动画一共需要的时间
    color: #fff;
    font-size: 20px;
    font-weight: 600;
}
</style>

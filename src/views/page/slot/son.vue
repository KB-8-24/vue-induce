<template>
    <div>
        这是a插槽
        <slot name="a" :arr="arr"></slot>
        <br />
        这是b插槽
        <slot name="b" :brr="arr1"></slot>
    </div>
</template>

<script>
export default {
    name: "VueInduceSON",

    data() {
        return {
            arr: ["你好啊", "猪头", "真棒"],
            arr1: [1, 2, 3, 5]
        }
    },

    mounted() {},

    methods: {}
}
</script>

<style lang="scss" scoped></style>

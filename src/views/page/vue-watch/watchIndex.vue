<template>
  <div>{{ state1 }} {{ state2 }}</div>
</template>

<script>
export default {
  // watch 可以监听data 和 props 里面的数据
  watch: {
    // 简写方式
    state1(newState, oldState) {
      console.log(newState, oldState, "state1")
    },
    // 完整写法
    state2: {
      handler(newState, oldState) {
        console.log(newState, oldState, "state2")
      },
      deep: true, // 普通的watch方法无法监听到对象内部属性的改变,deep属性对对象进行深度监听
      immediate: true // 最初绑定值的时候也执行函数，则就需要用到immediate属性
    },
    // 监听对象中的某个属性
    "state1.a": {
      handler(newState, oldState) {
        console.log(newState, oldState, "state1")
      }
    }
  },
  data() {
    return {
      state1: {
        a: 66,
        b: 88
      },
      state2: {
        a: 66,
        b: 24
      }
    }
  },
  created() {
    setTimeout(() => {
      this.state1.a = 24
      this.state2.a = 28
    }, 2000)
  }
}
</script>

<style lang="scss" scoped></style>

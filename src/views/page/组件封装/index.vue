<template>
  <div>
    <h3>组件封装</h3>
    <child :name="name" :age.sync="age" :obj="obj"></child>
    <el-button type="info" size="default" @click="btn">父按钮</el-button>
  </div>
</template>

<script>
import child from "./child"
export default {
  name: "VueInduceIndex",
  components: {
    child
  },
  data() {
    return {
      name: "科比",
      age: 24,
      obj: {}
    }
  },
  methods: {
    btn() {
      this.age++
    }
  },
  created() {
    this.$axios.get(`https://mock.apifox.cn/m1/2785769-0-default/pet/2`).then(res => {
      this.obj = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped></style>

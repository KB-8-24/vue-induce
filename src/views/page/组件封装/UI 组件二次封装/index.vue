<template>
  <div class="main">
    <my-input
      class="w-96 ml-10 mt-10"
      v-model="data"
      placeholder="请输入内容"
      @input="input"
      prefix-icon="el-icon-search"
      ref="myInput"
    >
      <template slot="append"> 百分比 </template>
      <template slot="prepend"> 开始 </template>
    </my-input>
  </div>
</template>

<script>
import myInput from "./myInput"
export default {
  name: "VueIndex",
  components: {
    myInput
  },
  data() {
    return {
      data: "父组件的初始值"
    }
  },

  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.myInput.select())
    })
  },

  methods: {
    input(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 500px;
  margin: 10px 0 0 20px;
}
</style>

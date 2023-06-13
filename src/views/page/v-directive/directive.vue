<template>
  <div>
    <div class="form">
      <span>金额：</span>
      <el-input
        v-getvalue="'默认'"
        v-model="value"
        ref="form"
        placeholder="请输入内容"
        size="mini"
        label="金额："
      ></el-input>
    </div>
    <el-button type="primary" @click="btn" size="mini" ref="btn">我是指令</el-button>
  </div>
</template>

<script>
export default {
  name: "VueInduceDirective",

  data() {
    return {
      value: ""
    }
  },
  methods: {
    focus() {
      this.$refs.form.focus()
    },
    btn() {
      console.log("点击了")
      this.$nextTick(() => {
        console.log(this.$refs.btn)
        this.$set(this.$refs.btn, "disabled", true)
      })
    }
  },
  directives: {
    getvalue: {
      // 所绑定的DOM元素
      inserted(el, binding) {
        el.children[0].value = "初始化参数"
        el.children[0].style.backgroundColor = "pink"
        console.log(binding.value) //指令后面参数
      }
    },
    disabled: {
      // 所绑定的DOM元素
      inserted(el, binding) {
        console.log(binding.value) //指令后面参数
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 300px;
  display: flex;
  span {
    width: 60px;
  }
}
</style>

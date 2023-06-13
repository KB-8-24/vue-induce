<template>
  <div>
    <section>
      B组件中value值 {{ value }} <el-button type="primary" size="mini" @click="change">触发mixins方法</el-button>
    </section>
  </div>
</template>

<script>
import { myMixins } from "@/mixins/myMixins"
export default {
  name: "VueMixinsB",
  mixins: [myMixins],
  data() {
    return {
      b: "我是B组件data",
      value: 24
    }
  },

  created() {
    console.log("调用了mixinsB created()")
  },

  methods: {
    change() {
      this.value += 100
    }
  }
}
</script>

<style lang="scss" scoped></style>

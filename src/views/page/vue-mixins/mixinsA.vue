<template>
  <div>
    <section>
      A组件中value值 {{ value }} <el-button type="primary" size="mini" @click="change">触发mixins方法</el-button>
    </section>
  </div>
</template>

<script>
import { myMixins } from "@/mixins/myMixins"
export default {
  name: "VueMixinsA",
  mixins: [myMixins],
  data() {
    return {
      a: "我是A组件data",
      value: 8
    }
  },

  created() {
    console.log("调用了mixinsA created()")
  },

  methods: {}
}
</script>

<style lang="scss" scoped></style>

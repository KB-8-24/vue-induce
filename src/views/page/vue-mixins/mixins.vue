<template>
  <div>
    <mixins-a></mixins-a>
    <el-divider></el-divider>
    <mixins-b></mixins-b>
  </div>
</template>

<script>
import mixinsA from "@/views/page/vue-mixins/mixinsA.vue"
import mixinsB from "@/views/page/vue-mixins/mixinsB.vue"
export default {
  name: "VueInduceMixins",
  components: {
    mixinsA,
    mixinsB
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>

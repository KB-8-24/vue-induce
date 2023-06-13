<template>
  <div class="w-1/2 p-5">
    <el-button type="primary" size="default" @click="refresh">刷新当前路由</el-button>
    <div v-for="item in 20" :key="item">
      {{ Math.random() * 10 ** 5 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "refreshIndex",
  inject: ["reload"],
  data() {
    return {}
  },

  mounted() {},

  methods: {
    refresh() {
      this.$router.push("/refresh")
      // console.log(this.reload())
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      globalA: "我是全局的变量",
      isRouterAlive: true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>

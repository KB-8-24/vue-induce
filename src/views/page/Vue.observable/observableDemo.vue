<template>
  <div>
    <div>{{ count }}</div>
    <el-button size="mini" type="primary" @click="add">+1</el-button>
    <router-link to="/page/observable/two"><el-button size="mini" type="primary">切换</el-button></router-link>
    <router-view ref="routerView"></router-view>
  </div>
</template>

<script>
import { store, mutations } from "@/observable/observable.js"
export default {
  computed: {
    count() {
      return store.count
    }
  },
  methods: {
    add() {
      this.$nextTick(() => {
        console.log(this.$refs.routerView)
      })
      mutations.setChange()
    }
  }
}
</script>

<style scoped></style>

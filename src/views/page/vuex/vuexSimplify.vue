<template>
  <div>
    <div>
      <span>vuex store：</span>
      <span>{{ num }}</span>
    </div>
    <div>
      <span>vuex getters：</span>
      <span>{{ Getters() }}</span>
    </div>
    <el-button type="primary" size="mini" @click="addM">mutations ++</el-button>
    <el-button type="success" size="mini" @click="addA">actions ++</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex"
export default {
  // 简化使用
  data() {
    return {}
  },
  computed: {
    ...mapState(["number1", "number2"]), // 在组件通过this就可调用，不用再写this.$store.state
    ...mapGetters(["total"])
  },
  methods: {
    ...mapMutations(["changeNumber1", "changeNumber2"]),
    // 定义别名方式
    // ...mapMutations({
    //   changeNumber1Alias: 'changeNumber1',
    //   changeNumber2Alias: 'changeNumber2'
    // }),
    ...mapActions(["changeNumber1Action", "changeNumber2Action"])
    // 定义别名方式
    // ...mapActions({
    //   changeNumber1ActionAlias: 'changeNumber1Action',
    //   changeNumber2ActionAlias: 'changeNumber2Action'
    // }),
  }
}
</script>

<style lang="scss" scoped></style>

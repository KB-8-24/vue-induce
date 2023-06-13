<template>
  <div>
    <my-con v-model="value"></my-con>
    <button @click="add">父组件增加</button>
  </div>
</template>

<script>
import myCon from "./myCom.vue"
export default {
  name: "VueInduceIndex",
  components: {
    myCon
  },
  data() {
    return {
      value: 0
    }
  },
  methods: {
    add() {
      this.value++
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div v-for="item in list" :key="item.id">
      {{ item.text }}
      <!-- <div v-if="item.children && item.children.length > 0"> -->
      <c-menu :list="item.children"></c-menu>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "c-menu",
  props: {
    list: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>

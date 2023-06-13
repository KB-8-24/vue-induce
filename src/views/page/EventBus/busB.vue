<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  name: "busB",
  data() {
    return {
      text: ""
    }
  },
  created() {
    this.$bus.$on("mes", p => {
      this.text = p
      // this.$bus.$off("mes")
    })
  }
}
</script>

<style scoped></style>

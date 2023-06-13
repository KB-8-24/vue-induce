<template>
  <div>
    {{ name }}
    {{ age }}
  </div>
</template>

<script>
export default {
  name: "VueInduceChild",
  props: {
    name: String,
    age: Number,
    obj: Object
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>

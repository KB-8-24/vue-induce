<template>
  <div>
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "VueInduceMyCom",
  props: ["value"],
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped></style>

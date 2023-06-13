<template>
  <div>
    <son>
      <template #a="data">
        {{ data }}
      </template>
      <template #b="data">
        {{ data }}
      </template>
    </son>
  </div>
</template>

<script>
import son from "@/views/page/slot/son.vue"
export default {
  name: "VueInduceFatherH",
  components: {
    son
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>

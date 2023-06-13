<template>
  <div>{{ count }}</div>
</template>

<script>
import { store } from "@/observable/observable.js"
export default {
  name: "observableDemo2",
  computed: {
    count() {
      return store.count
    }
  }
}
</script>

<style scoped></style>

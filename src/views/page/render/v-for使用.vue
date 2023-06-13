<script>
export default {
  name: "VueInduceVFor",

  data() {
    return {
      list: ["苹果", "香蕉", "梨子", "西瓜"]
    }
  },

  render(h) {
    return h(
      "ul",
      this.list.map(i => h("li", i))
    )
  }
}
</script>

<style lang="scss" scoped></style>

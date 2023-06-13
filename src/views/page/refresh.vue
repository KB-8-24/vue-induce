<script>
export default {
  name: "VueInduceRefresh",
  render: h => {
    return h(null)
  },
  beforeRouteEnter(to, from, next) {
    let { path } = from
    next(vm => {
      vm.$router.replace(path)
    })
  }
}
</script>

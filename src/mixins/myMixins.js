export const myMixins = {
  components: {},
  data() {
    return {
      name: "mixins",
      value: 0
    }
  },
  created() {
    console.log("调用了myMixins created()")
  },
  mounted() {},
  computed: {},
  methods: {
    change() {
      this.value++
    }
  }
}

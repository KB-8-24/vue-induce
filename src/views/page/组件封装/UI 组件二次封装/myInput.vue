<template>
  <div>
    <div>
      <el-input v-bind="$attrs" v-on="$listeners" :clearable="clearable" ref="elInput">
        <template v-for="item in Object.keys($slots)" :slot="item">
          <!-- :slot="item" 简写 #[item] -->
          <slot :name="item"></slot>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log(this.$attrs) 获取父元素传递的所有props属性
    // console.log(this.$listeners)
    // console.log(this.$slots)
    this.$nextTick(() => {
      const obj = this.$refs.elInput
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (typeof obj[key] === "function") {
            this[key] = obj[key]
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped></style>

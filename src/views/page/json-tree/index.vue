<!-- eslint-disable no-unused-vars -->
<template>
  <div style="display: flex">
    <div>
      原数据格式
      <pre>
            {{ list }}
        </pre
      >
    </div>
    <div>
      新数据格式
      <pre>
            {{ newList }}
        </pre
      >
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { construct, destruct } from "@aximario/json-tree"
export default {
  name: "VueInduceIndex",

  data() {
    return {
      list: [
        { id: 1, parent: null, text: "菜单1" },
        { id: 11, parent: 1, text: "菜单1-1" },
        { id: 111, parent: 11, text: "菜单1-1-1" },
        { id: 112, parent: 11, text: "菜单1-1-2" },
        { id: 12, parent: 1, text: "菜单1-2" },
        { id: 2, parent: null, text: "菜单2" },
        { id: 21, parent: 2, text: "菜单2-1" },
        { id: 22, parent: 2, text: "菜单2-2" }
      ]
    }
  },

  computed: {
    newList() {
      return construct(this.list, {
        id: "id",
        pid: "parent",
        children: "children"
      })
    }
  }
}
</script>

<style scoped></style>

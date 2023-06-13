<template>
  <div>
    <el-tree :data="list" :props="defaultProps"></el-tree>
    <el-divider></el-divider>
    <c-menu :list="list"></c-menu>
  </div>
</template>

<script>
import cMenu from "./menu"
export default {
  name: "VueInduceIndex",
  components: {
    cMenu
  },
  data() {
    return {
      list: [
        {
          id: 1,
          parent: null,
          text: "菜单1",
          children: [
            {
              id: 11,
              parent: 1,
              text: "菜单1-1",
              children: [
                {
                  id: 111,
                  parent: 11,
                  text: "菜单1-1-1"
                },
                {
                  id: 112,
                  parent: 11,
                  text: "菜单1-1-2",
                  children: [
                    {
                      id: 1121,
                      parent: 112,
                      text: "菜单1-1-2-1"
                    }
                  ]
                }
              ]
            },
            {
              id: 12,
              parent: 1,
              text: "菜单1-2"
            }
          ]
        },
        {
          id: 2,
          parent: null,
          text: "菜单2",
          children: [
            {
              id: 21,
              parent: 2,
              text: "菜单2-1"
            },
            {
              id: 22,
              parent: 2,
              text: "菜单2-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "text"
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

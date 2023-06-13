<template>
  <div class="flag">
    <el-menu
      default-active="1-1-1-1"
      background-color="#515a6e"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="horizontal"
    >
      <!-- 引入组件 -->
      <menu-tree :menuData="menuList"></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import MenuTree from "./element 动态菜单.vue"
export default {
  name: "menuX",
  components: {
    MenuTree
  },
  data() {
    return {
      menuList: [
        {
          index: "1",
          icon: "el-icon-menu",
          name: "一级菜单01",
          children: [
            {
              index: "1-1",
              icon: "el-icon-film",
              name: "二级菜单01",
              children: [
                {
                  index: "1-1-1",
                  icon: "el-icon-date",
                  name: "三级菜单01",
                  children: [
                    {
                      index: "1-1-1-1",
                      icon: "el-icon-monitor",
                      name: "四级菜单01"
                    },
                    {
                      index: "1-1-1-2",
                      icon: "el-icon-monitor",
                      name: "四级菜单02"
                    }
                  ]
                },
                {
                  index: "1-1-2",
                  icon: "el-icon-headset",
                  name: "三级菜单02"
                }
              ]
            },
            {
              index: "1-2",
              icon: "el-icon-data-line",
              name: "二级菜单02"
            },
            {
              index: "1-3",
              icon: "el-icon-data-line",
              name: "二级菜单03"
            }
          ]
        },
        {
          index: "2",
          icon: "el-icon-s-data",
          name: "一级菜单02"
        },
        {
          index: "3",
          icon: "el-icon-s-operation",
          name: "一级菜单03"
        },
        {
          index: "4",
          icon: "el-icon-user",
          name: "一级菜单04"
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.flag > ul > div {
  display: flex;
}
::v-deep .el-submenu__icon-arrow {
  right: 16px;
}
::v-deep .el-submenu__title {
  padding-right: 35px;
}
</style>

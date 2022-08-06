<template>
    <div>
        <!-- 组件递归会导致多了一层div，导致样式变化 mode="horizontal" 会改变样式-->
        <template v-for="menu in this.menuData">
            <el-submenu :key="menu.index" :index="menu.index" v-if="menu.children">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span slot="title">{{ menu.name }}</span>
                </template>
                <menu-tree :menuData="menu.children"></menu-tree>
            </el-submenu>
            <el-menu-item :key="menu.index" :index="menu.index" v-else>
                <i :class="menu.icon"></i>
                <span slot="title">{{ menu.name }}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
    props: ["menuData"],
    name: "MenuTree"
}
</script>

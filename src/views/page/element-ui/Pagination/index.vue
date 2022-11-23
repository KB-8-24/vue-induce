<template>
    <div>
        <div v-for="(item, index) in data" :key="item.name">{{ index + 1 }} - {{ item.name }} {{ item.id }}</div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next"
            :total="total"
        >
        </el-pagination>
    </div>
</template>

<script>
import testData from "../../../../assets/demo.json"
export default {
    name: "VueInduceIndex",

    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            total: 0,
            data: [],
            list: []
        }
    },

    mounted() {
        this.total = testData.data.length
        this.list = testData.data
        this.getData()
    },

    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
            this.getData()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getData()
        },
        getData() {
            this.data = this.list.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    }
}
</script>

<style lang="scss" scoped></style>

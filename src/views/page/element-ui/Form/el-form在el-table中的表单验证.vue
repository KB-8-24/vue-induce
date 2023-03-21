<template>
    <div style="width: 40%">
        <el-form ref="applyForm" :model="applyForm" :rules="applyRules">
            <el-table :data="applyForm.applyDataList" border stripe size="small">
                <el-table-column label="*模拟充值">
                    <template slot-scope="scope">
                        <el-form-item
                            :prop="'applyDataList.' + scope.$index + '.value3'"
                            :rules="applyRules.value3"
                            :key="scope.row.id"
                        >
                            <span v-show="!scope.row.show" @dblclick="spanClick(scope.row, scope.row.id)">{{
                                scope.row.value3
                            }}</span>
                            <el-input
                                :autofocus="true"
                                :ref="scope.row.id"
                                @blur="spanBlur(scope.row)"
                                v-show="scope.row.show"
                                v-model="scope.row.value3"
                                placeholder="请输入申请数量"
                                size="small"
                            />
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column label="*申请数量">
                    <template slot-scope="scope">
                        <el-form-item
                            :prop="'applyDataList.' + scope.$index + '.value4'"
                            :rules="applyRules.value4"
                            :key="scope.row.id"
                        >
                            <!-- <el-input v-model="scope.row.value4" placeholder="请输入申请数量" size="small" /> -->
                            <span>{{ scope.row.value4 }}</span>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column label="消耗">
                    <template slot-scope="scope">
                        <el-form-item
                            :prop="'applyDataList.' + scope.$index + '.value6'"
                            :rules="applyRules.value6"
                            :key="scope.row.id"
                        >
                            <!-- <el-input v-model="scope.row.value6" placeholder="请输入申请数量" size="small" /> -->
                            <span>{{ scope.row.value6 }}</span>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="delBtn(scope.$index)" size="small">删除</el-button>
                        <el-button type="text" @click="addBtn(scope.$index)" size="small">增加</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <el-button class="btn" style="display: none" type="primary" size="default" @click="submit">提交</el-button>
    </div>
</template>

<script>
// 总结
// 1.表单 v-if v-show 验证取消 key 原理
// 2.表单对象rules 嵌套对象
// 3.table 与 form 表单嵌套
// 4.多个 相同form 表单 组件使用

export default {
    name: "VueElFormElTable",

    data() {
        return {
            input: "",
            applyForm: {
                applyDataList: [
                    {
                        show: false,
                        value3: "优秀",
                        value4: "厉害啊",
                        value6: "真棒",
                        id: 1
                    },
                    {
                        show: false,
                        value3: "的核算",
                        value4: "阿萨德",
                        value6: "搜索",
                        id: 2
                    }
                ]
            },
            applyRules: {
                value3: [{ required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }],
                value4: [{ required: true, message: "请输入申请数量", trigger: ["change", "blur"] }],
                value6: [{ required: true, message: "请输入申请数量", trigger: ["change", "blur"] }]
                //     "applyDataList.0.value3": [{ required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }],
                //     "applyDataList.0.value4": [{ required: true, message: "请输入申请数量", trigger: ["change", "blur"] }],
                //     "applyDataList.0.value6": [{ required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }],
                //     "applyDataList.1.value3": [{ required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }],
                //     "applyDataList.1.value4": [{ required: true, message: "请输入申请数量", trigger: ["change", "blur"] }],
                //     "applyDataList.1.value6": [{ required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }]
            }
        }
    },
    methods: {
        delBtn(i) {
            this.applyForm.applyDataList.splice(i, 1)
            // this.$nextTick(() => {
            //     this.$refs.applyForm.clearValidate()
            // })
        },
        addBtn() {
            this.applyForm.applyDataList.push({
                value3: "",
                value4: "",
                value6: "",
                id: new Date().getTime()
            })
            // this.$nextTick(() => {
            //     this.$refs.applyForm.clearValidate()
            // })
        },
        submit() {
            this.$refs.applyForm.validate(value => {
                if (value) {
                    this.$message({
                        message: "恭喜你，这是一条成功消息",
                        type: "success"
                    })
                }
            })
        },
        spanClick(params, id) {
            params.show = !params.show
            this.$nextTick(() => {
                this.$refs[id].focus()
            })
        },
        spanBlur(params) {
            params.show = !params.show
        }
    },
    computed: {
        // applyRules() {
        //     let applyRules = {}
        //     for (let i = 0; i < this.applyForm.applyDataList.length; i++) {
        //         applyRules[`applyDataList.${i}.value3`] = [
        //             { required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }
        //         ]
        //         applyRules[`applyDataList.${i}.value4`] = [
        //             { required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }
        //         ]
        //         applyRules[`applyDataList.${i}.value6`] = [
        //             { required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }
        //         ]
        //     }
        //     return applyRules
        // }
    }
}
</script>

<style lang="scss" scoped></style>

<template>
    <div style="width: 40%">
        <el-form ref="applyForm" :model="applyForm" :rules="applyRules">
            <el-table :data="applyForm.applyDataList" border stripe size="small">
                <el-table-column label="*模拟充值">
                    <template slot-scope="scope">
                        <el-form-item :prop="'applyDataList.' + scope.$index + '.value3'" :rules="applyRules.value3">
                            <el-input v-model="scope.row.value3" placeholder="请输入申请数量" size="small" />
                        </el-form-item>
                    </template>
                </el-table-column>

                <el-table-column label="*申请数量">
                    <template slot-scope="scope">
                        <el-form-item :prop="'applyDataList.' + scope.$index + '.value4'" :rules="applyRules.value4">
                            <el-input v-model="scope.row.value4" placeholder="请输入申请数量" size="small" />
                        </el-form-item>
                    </template>
                </el-table-column>

                <el-table-column label="消耗">
                    <template slot-scope="scope">
                        <el-form-item :prop="'applyDataList.' + scope.$index + '.value6'" :rules="applyRules.value6">
                            <el-input v-model="scope.row.value6" placeholder="请输入申请数量" size="small" />
                        </el-form-item>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="delBtn(scope.$index)" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "VueElFormElTable",

    data() {
        return {
            applyForm: {
                applyDataList: [
                    {
                        value3: "",
                        value4: "",
                        value6: ""
                    },
                    {
                        value3: "",
                        value4: "",
                        value6: ""
                    }
                ]
            },
            applyRules: {
                value3: [{ required: true, message: "请选择模拟充值", trigger: ["change", "blur"] }],
                value4: [{ required: true, message: "请输入申请数量", trigger: ["change", "blur"] }],
                value6: [{ required: true, message: "请输入申请数量", trigger: ["change", "blur"] }]
            }
        }
    },
    mounted() {},

    methods: {}
}
</script>

<style lang="scss" scoped></style>

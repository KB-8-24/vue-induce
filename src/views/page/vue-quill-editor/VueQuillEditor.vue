<template>
    <div>
        <section>
            <h3>vue-quill-editor富文本编辑器</h3>
            <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @change="onEditorChange($event)"
            >
            </quill-editor>
            <div class="submit">
                <el-button type="primary" size="mini">保存</el-button>
                <el-button type="danger" size="mini">取消</el-button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: null,
            // 根据自己需要配置toolbar功能项，不配置默认显示所有功能
            editorOption: {
                placeholder: "请输入文本...", //自定义提示文本
                modules: {
                    toolbar: [
                        ["bold", "italic", "underline", "strike"], // 切换按钮
                        ["blockquote", "code-block"],
                        [{ header: 1 }, { header: 2 }], // 自定义按钮值
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }], // 上标/下标
                        [{ indent: "-1" }, { indent: "+1" }], // 缩进
                        [{ direction: "rtl" }], // 文本方向
                        [{ size: ["small", false, "large", "huge"] }], // 自定义下拉
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }], // 具有主题默认值的下拉列表
                        [{ font: [] }],
                        [{ align: [] }],
                        ["clean"],
                        ["image"],
                        ["video"]
                    ]
                }
            }
        }
    },
    methods: {
        onEditorChange({ html }) {
            console.log(html)
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    width: 80%;
    margin: auto;
}
.quill-editor {
    height: 300px;
}
.submit {
    .el-button {
        margin-top: 50px;
        float: right;
        margin-right: 15px;
    }
}
</style>

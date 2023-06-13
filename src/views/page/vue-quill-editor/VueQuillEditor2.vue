<template>
  <div>
    <div class="quillEditor">
      <!-- 图片上传组件辅助-->
      <el-upload
        class="avatar-uploader"
        :action="serverUrl"
        name="Filedata"
        :headers="header"
        :show-file-list="false"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :before-upload="beforeUpload"
      >
      </el-upload>
      <!--富文本编辑器组件-->
      <el-row v-loading="quillUpdateImg">
        <quill-editor
          v-model="detailContent"
          ref="myQuillEditor"
          :options="editorOption"
          @change="onEditorChange($event)"
          @ready="onEditorReady($event)"
        >
        </quill-editor>
      </el-row>
    </div>
  </div>
</template>
<script>
// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"] // remove formatting button
]
export default {
  data() {
    return {
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      serverUrl: "/api/1.0.0/platform/pub/file/upload/image", // 这里写你要上传的图片服务器地址
      header: { token: sessionStorage.token }, // 有的图片服务器要求请求头需要有token之类的参数，写在这里
      detailContent: "", // 富文本内容
      editorOption: {
        placeholder: "",
        theme: "snow", // or 'bubble'
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              image: function (value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".avatar-uploader input").click()
                } else {
                  this.quill.format("image", false)
                }
              }
            }
          }
        }
      } // 富文本编辑器配置
    }
  },
  methods: {
    // 上传图片前
    beforeUpload() {
      // 显示loading动画
      this.quillUpdateImg = true
    }, // 上传图片成功
    uploadSuccess(res) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill
      // 如果上传成功
      if (res.code === 0) {
        // 获取光标所在位置
        let length = quill.getSelection().index
        // 插入图片  res.data.file_url
        quill.insertEmbed(length, "image", "http://192.168.6.20:8099" + res.data.file_url)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        this.$message.error("图片插入失败")
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    // 富文本图片上传失败
    uploadError() {
      // loading动画消失
      this.quillUpdateImg = false
      this.$message.error("图片插入失败")
    },
    onEditorReady() {},
    onEditorChange() {}
  }
}
</script>
<style lang="scss" scoped>
.quill-editor {
  height: 300px;
}
.quillEditor {
  width: 80%;
  margin: auto;
}
</style>

<template>
  <div>
    <section class="upload">
      <el-upload
        action="/api/1.0.0/platform/pub/file/upload/image"
        list-type="picture-card"
        name="Filedata"
        :on-success="success"
        :on-error="error"
        :on-preview="handlePictureCardPreview"
        multiple
      >
        <i class="el-icon-plus"></i>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </section>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-button type="primary" size="mini" @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: []
    }
  },
  methods: {
    success(response, file, fileList) {
      this.fileList = fileList
    },
    error() {
      this.$message.error("上传失败")
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submit() {
      const p = JSON.parse(JSON.stringify(this.fileList))
      const params = p.map(i => i.response.data)
      console.log(params)
      this.$message({
        message: "恭喜你，上传成功！",
        type: "success"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .upload .el-upload--picture-card {
  width: 70px;
  height: 70px;
  line-height: 70px;
}
::v-deep .el-upload-list__item {
  width: 70px;
  height: 70px;
}
</style>

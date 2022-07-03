<template>
    <div style="margin: 20px">
        <button @click="downloadText">下载文本——“{{ text }}”</button>
    </div>
</template>

<script>
import download from "downloadjs"
export default {
    name: "downloadIndex",
    methods: {
        downloadText() {
            this.fileName = "点击下载文本后生成的txt文件.txt"
            download(this.text, this.fileName, "text/plain")
        }
    },
    data() {
        return {
            text: "我爱你，中国！",
            fileName: ""
        }
    }
}
</script>

module.exports = {
    lintOnSave: false, //关闭eslint检查
    devServer: {
        host: "0.0.0.0", // 默认是localhost
        port: 8080, // 前端项目编译后使用的端口号，跟webpack配置的port同理
        proxy: {
            "/api": {
                target: "https://console-mock.apipost.cn/app/mock/project/702f90d1-b75a-4f84-b5e1-8ab0393d4a3d", // 实际跨域请求的API地址
                secure: false, // https请求则使用true
                ws: true,
                changeOrigin: true, // 跨域
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
    // publicPath: "./" // vue-cli3.3+新版本使用 保证打包之后路径正常
}

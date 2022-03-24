<template>
    <div>websocket <el-button type="primary" size="mini" @click="close">手动关闭websocket</el-button></div>
</template>

<script>
export default {
    name: "VueInduceWebsocket",

    data() {
        return {
            ws: null
        }
    },
    created() {
        this.wsConnect()
    },
    methods: {
        wsConnect() {
            let socket = new WebSocket("ws://192.168.6.34:1009/websocket")
            this.ws = socket
            socket.onopen = () => {
                socket.send(
                    JSON.stringify({
                        room: "99bc81e2c674418391fedd439d457799",
                        uid: "99bc81e2c674418391fedd439d457799",
                        action: "join",
                        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbm5hbWUiOiJzdXBlcmFkbWluIiwiZXhwIjoxNjQ4MTExNDU1LCJ1c2VySWQiOiI5OWJjODFlMmM2NzQ0MTgzOTFmZWRkNDM5ZDQ1Nzc5OSIsInV1aWQiOiI3ZDAyNzc4MS0xNzc2LTQzYzQtYWJlNC03NTJjZjI4MjJkMWEifQ.PD0DWPXdiElCvFAgfZeP0RZI_yOBUeWjC4Md8gnjGnc"
                    })
                )
            }
            socket.onmessage = event => {
                // event.data 是响应数据
                console.log(JSON.parse(event.data))
            }
        },
        close() {
            // 手动关闭websocket
            this.ws.close()
            console.log(this.ws)
        }
    }
}
</script>

<style lang="scss" scoped></style>

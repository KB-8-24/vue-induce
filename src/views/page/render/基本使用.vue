<script>
export default {
    name: "VueInduceIndex",
    render(createElement) {
        return createElement(
            "ul",
            {
                class: "red"
            },
            [
                createElement(
                    "li",
                    {
                        style: {
                            backgroundColor: "pink",
                            color: "#fff"
                        },

                        on: {
                            click: () => {
                                console.log("点击了🐷")
                                console.log(this.$slots.default)
                            }
                        }
                    },
                    "猪头"
                ),
                createElement("li", "猪头"),
                createElement("li", "猪头")
            ]
        )
    }
}
</script>

<style lang="scss" scoped>
.red {
    color: red;
    margin-left: 20px;
}
</style>

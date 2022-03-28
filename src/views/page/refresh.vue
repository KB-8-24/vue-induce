<template>
    <div />
</template>

<script>
export default {
    name: "VueInduceRefresh",
    beforeRouteEnter(to, from, next) {
        let { path } = from
        next(vm => {
            vm.$router.replace(path)
        })
    }
}
</script>

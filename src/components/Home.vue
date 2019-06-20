<template>
    <div id="home">
        <h1>Home</h1>
        <Top></Top>
        <Content></Content>
    </div>
</template>

<script>
    import Top from './Top.vue'
    import Content from './Content.vue'

    export default {
        name: "home",
        components: {
            Top,
            Content
        }
    }
</script>

<style scoped>

</style>
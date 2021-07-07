<template>
    <div>
        <h1>About DadJokes</h1>
        <p>This is an App that display corny dad jokes!</p>
    </div>
</template>

<script>
export default {
    name: 'About',
    head() {
        return {
            title: 'About The App',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Best place for corny dad jokes'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
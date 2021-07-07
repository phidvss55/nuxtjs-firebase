<template>
    <header class="header">
        <h1 class="title">DadJokes</h1>
        <ul>
            <li>
                <nuxt-link to='/'>Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/jokes'>Jokes</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/about'>About</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px dotted #ccc;
    }

    .header .title  {
        font-size: 3rem;
        color: #526488;
        font-weight: 800;
        letter-spacing: 10px;
        margin-left: 10px;
    }

    .header ul {
        display: flex;
    }

    .header a {
        display: inline-block;
        background: #333333;
        color: #fff;
        padding: 0.3rem 1rem;
        margin-right: 0.5rem;
        border-radius: 5px;
    }
</style>
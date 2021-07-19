<template>
    <h1> Profile </h1>
</template>

<script>
export default {
    middleware: ['check_auth', 'auth']
}
</script>
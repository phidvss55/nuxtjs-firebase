<template>
    <h1>Your deck {{ $route.params.id }} is active.</h1>
</template>

<script>
export default {
    validate(context) {
        console.log(context);
        return /^[0,9]{9,12}$/.test(context.params.id);
    }
}
</script>
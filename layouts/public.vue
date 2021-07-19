<template>
  <div class="">
    <h1>Public layouts</h1>
    <header>Header section</header>
    <div>Banner section</div>
    <div>Who section</div>
    <nuxt/>
  </div>
</template>

<script>

export default {
  components: {
  }  
}
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background: #f4f4f4;
  }

  a {
    /* color: #666; */
    text-decoration: none;  
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 800px;
    margin: 2rem auto;
    overflow: hidden;
    padding: 1rem 2rem;
    background: #fff;
  }
</style>
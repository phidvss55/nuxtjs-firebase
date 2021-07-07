<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Search joke ... " />
    <input type="submit" value="Search Joke" />
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search_text", this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped>
</style>
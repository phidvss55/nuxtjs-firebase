<template>
  <div>
    <SearchJokes @search_text="searchText" />
    <Joke v-for="joke in jokes" :key="joke.id" :joke="joke" />
  </div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke.vue";
import SearchJokes from "../../components/Search.vue";

export default {
  components: {
    Joke,
    SearchJokes,
  },
  data() {
    return {
      jokes: [],
    };
  },
  async created() {
    const config = {
      headers: { Accept: "application/json" },
    };
    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);
      console.log(res.data.results);
      this.jokes = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async searchText(text) {
      const config = {
        headers: { Accept: "application/json" },
      };
      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );
        this.jokes = res.data.results;
      } catch (err) {
        console.log(err);
      }
    },
  },
  head() {
    return {
      title: "Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "What is dad jokes about?",
        },
      ],
    };
  },
};
</script>
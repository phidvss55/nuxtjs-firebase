<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <ul class="decks-list">
        <DeckList v-for="deck in decks" :key="deck.id" :deck="deck" />
      </ul>
    </div>
  </div>
</template>

<script>
import DeckList from "../../components/Decks/DeckList";

export default {
  head: {
    title: 'Decks | Listing'
  },
  components: {
    DeckList,
  },
  data() {
    return {
      modalName: "CreateDeckModal",
    };
  },
  computed: {
    decks() {
      return this.$store.getters.decks;
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: this.modalName });
    },
  },
};
</script>

<style lang="scss">
.decks-list {
  li {
    margin-bottom: 1rem;
    &:list-child {
      margin-bottom: 0;
    }
  }
  .deck {
    display: block;
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;

    img {
      padding: 5px;
      width: 250px;
      height: auto;
    }
  }
}
.modal-body {
  background-color: #ffffff;
  padding: 1rem;
}
</style>
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
        <DeckList v-for="deck in decks" :key="deck._id" :deck="deck" />
      </ul>
    </div>

    <!-- Modal section -->
    <v-modal :name="modalName">
      <div class="modal-body">
        <h1>Create a new Deck</h1>
        <form action="">
          <div class="form_group">
            <label for="">Name: </label>
            <input class="form_control" type="text" placeholder="Enter name" />
          </div>
          <div class="form_group">
            <label for="">Description: </label>
            <textarea
              class="form_control"
              cols="30"
              rows="3"
              placeholder="Give description"
            ></textarea>
          </div>
          <div class="form_group">
            <label for="">Thumbnail: </label>
            <input class="form_control" type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button @click.prevent="closeModal" class="btn btn_danger">
              Close
            </button>
            <button @click.prevent="createDeck" class="btn btn_success ml_3">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
    <!-- <p>Your decks, please enter number of deck to show:</p>
    <input
      class="form_control"
      type="text"
      v-model="deckId"
      placeholder="Please enter deckId"
    />
    <button class="mt_2 btn btn_primary" @click="showDecks">Go to Deck</button> -->
  </div>
</template>

<script>
import DeckList from "../../components/Decks/DeckList";

export default {
  components: {
    DeckList,
  },
  asyncData(content, callback) {
    setTimeout(() => {
      callback(null, {
        decks: [
          {
            _id: 1,
            name: "Learn English",
            description:
              "lorem Lorem ipsum dolor sit amet consectetur Hic, ndipisicing elit. Hic, nemo",
            thumbnail:
              "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
          },
          {
            _id: 2,
            name: "Learn Chinaese",
            description:
              "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. nemo",
            thumbnail:
              "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
          },
          {
            _id: 3,
            name: "Learn Japanese",
            description:
              "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
            thumbnail:
              "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
          },
        ],
        modalName: "CreateDeckModal",
      })
    }, 500);
  },
  methods: {
    openModal() {
      this.$modal.open({ name: this.modalName });
    },
    closeModal() {
      this.$modal.close({ name: this.modalName });
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
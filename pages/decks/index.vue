<template>
  <div>
    <div class="ct">
      <h3>List of your decks:</h3>
      <ul class="decks-list">
        <li>
          <div class="card deck-card">
            <img
              src="https://media.istockphoto.com/photos/magic-lotus-flower-with-fairy-light-miracle-and-mystery-concept-picture-id1248305561?k=6&m=1248305561&s=612x612&w=0&h=Im5lxaPXqBWbhvTarg4jZW00-W_qcmuxqQWXvKUCykE="
              alt="Thumbnail card"
            />
            <div class="card_body">
              <h3>Title Card</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                dolore.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="card deck-card">
            <img
              src="https://media.istockphoto.com/photos/magic-lotus-flower-with-fairy-light-miracle-and-mystery-concept-picture-id1248305561?k=6&m=1248305561&s=612x612&w=0&h=Im5lxaPXqBWbhvTarg4jZW00-W_qcmuxqQWXvKUCykE="
              alt="Thumbnail card"
            />
            <div class="card_body">
              <h3>Title Card</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                dolore.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="card deck-card">
            <img
              src="https://media.istockphoto.com/photos/magic-lotus-flower-with-fairy-light-miracle-and-mystery-concept-picture-id1248305561?k=6&m=1248305561&s=612x612&w=0&h=Im5lxaPXqBWbhvTarg4jZW00-W_qcmuxqQWXvKUCykE="
              alt="Thumbnail card"
            />
            <div class="card_body">
              <h3>Title Card</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                dolore.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p>Your decks, please enter number of deck to show:</p>
    <input
      class="form_control"
      type="text"
      v-model="deckId"
      placeholder="Please enter deckId"
    />
    <button class="mt_2 btn btn_primary" @click="showDecks">Go to Deck</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckId: "1",
    };
  },
  methods: {
    showDecks() {
      this.$router.push(`/decks/${this.deckId}`);
    },
  },
};
</script>

<style lang="scss">
.decks-list {
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 1rem;
    &:list-child {
      margin-bottom: 0;
    }
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
</style>
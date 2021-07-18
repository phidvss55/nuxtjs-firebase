<template>
  <div class="container">
    <DefaultHeader />

    <nuxt />

    <!-- Modal section -->
    <v-modal :name="deckModalName" v-slot="payload">
      <div class="modal-body">
        <h3 class="text_center">
          {{ payload && payload.payload ? "Edit a Deck" : "Create new Deck" }}
        </h3>
        <hr />
        <DeckForm
          @submit="onSubmit"
          :modalName="deckModalName"
          :deck="payload.payload"
        />
      </div>
    </v-modal>

    <DefaultFooter />
  </div>
</template>

<script>
import axios from "axios";

import DeckForm from "../components/Decks/DeckForm";
import DefaultHeader from "../components/DefaultHeader";
import DefaultFooter from "../components/DefaultFooter";

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    DeckForm,
  },
  data() {
    return {
      deckModalName: "CreateDeckModal",
    };
  },
  methods: {
    async onSubmit(deckData) {
      if (deckData && deckData.id) {
        await axios
          .put(
            `https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com/decks/${deckData.id}.json`,
            deckData
          )
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await axios
          .post(
            "https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com/decks.json",
            deckData
          )
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

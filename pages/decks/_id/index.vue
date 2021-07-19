<template>
  <section class="">
    <div class="r">
      <div class="ct text_center">
        <h3 class="mb_3"><a href="#">Deck {{ $route.params.id }}</a> <br> {{ deck.name }} </h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal(cardModalName)">Create a card</button>
          <button class="btn btn_warning" @click.prevent="openModal(deckModalName)">Edit Deck</button>
        </div>
        <hr class="devide" />
        <div class="r">
          <CardList v-for="card in cards" :key="card._id" :card="card"/>
        </div>
      </div>
    </div>

    <!-- Modal section -->
    <v-modal :name="cardModalName">
      <div class="modal-body">
        <h3 class="text_center">Create a new Deck</h3>
        <hr>
        <form action="">
          <div class="form_group">
            <label for="">Name: </label>
            <input class="form_control" type="text" placeholder="Enter name" />
          </div>
          <div class="form_group">
            <label for="">Description: </label>
            <textarea class="form_control" cols="30" rows="3" placeholder="Give description"></textarea>
          </div>
          <div class="form_group">
            <label for="">Thumbnail: </label>
            <input class="form_control" type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button @click.prevent="closeModal(cardModalName)" class="btn btn_danger">Close</button>
            <button @click.prevent="createDeck" class="btn btn_success ml_3">Create</button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import axios from 'axios';
import CardList from '../../../components/Cards/CardList';

export default {
  head: {
    title: 'Deck | Detail'
  },
  components: {
     CardList
  },
  data() {
    return {
      cardModalName: 'CreateCardModal',
      deckModalName: 'CreateDeckModal',
      cards: [
        {
          _id: 1,
          picture: 'https://placekitten.com/g/300/200',
          keyword: 'Cat 1'
        },{
          _id: 2,
          picture: 'https://placekitten.com/g/300/200',
          keyword: 'Cat 2'
        },{
          _id: 3,
          picture: 'https://placekitten.com/g/300/200',
          keyword: 'Cat 3'
        },{
          _id: 4,
          picture: 'https://placekitten.com/g/300/200',
          keyword: 'Cat 4'
        },
      ]
    }
  },
  asyncData(context) {
    return axios.get(`https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com/decks/${context.params.id}.json`)
    .then((res) => {
      return { deck: res.data }
    }).catch((err) => {
      context.error(err);
    })
  },
  methods: {
    openModal(name) {
      if (name === 'CreateDeckModal') {
        this.$modal.open({ name: name, payload: { ...this.deck, id: this.$route.params.id } });
      } else {
        this.$modal.open({ name: name });
      }
    },
    closeModal(name) {
      this.$modal.close({ name: name });
    },
  }
};
</script>

<style lang="scss">
section {
  padding-top: 1.5rem;
  .devide {
    margin: 2rem;
  }
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
}
</style>
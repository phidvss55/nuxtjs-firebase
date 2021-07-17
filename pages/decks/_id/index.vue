<template>
  <section class="">
    <div class="r">
      <div class="ct text_center">
        <h3>Deck {{ $route.params.id }}: Learn English by sky albert</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">Create a card</button>
        </div>
        <hr class="devide" />
        <div class="r">
          <CardList v-for="card in cards" :key="card._id" :card="card"/>
        </div>
      </div>
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
            <textarea class="form_control" cols="30" rows="3" placeholder="Give description"></textarea>
          </div>
          <div class="form_group">
            <label for="">Thumbnail: </label>
            <input class="form_control" type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button @click.prevent="closeModal" class="btn btn_danger">Close</button>
            <button @click.prevent="createDeck" class="btn btn_success ml_3">Create</button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import CardList from '../../../components/Cards/CardList';

export default {
  components: {
     CardList
  },
  data() {
    return {
      modalName: 'CreateCardModal',
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
  validate({ params }) {
    return /^[0-9]$/.test(params.id);
  },
  methods: {
    openModal() {
      this.$modal.open({ name: this.modalName });
    },
    closeModal() {
      this.$modal.close({ name: this.modalName });
    },
  }
};
</script>

<style lang="scss">
section {
  padding-top: 3rem;
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
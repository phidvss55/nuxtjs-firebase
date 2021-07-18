<template>
  <form action="" @submit.prevent="onSave">
    <div class="form_group">
      <label for="">Name: </label>
      <input
        class="form_control"
        type="text"
        placeholder="Enter name"
        v-model="editDeck.name"
      />
    </div>
    <div class="form_group">
      <label for="">Description: </label>
      <textarea
        class="form_control"
        cols="30"
        rows="3"
        placeholder="Give description"
        v-model="editDeck.description"
      ></textarea>
    </div>
    <div class="form_group">
      <label for="">Thumbnail: </label>
      <input
        class="form_control"
        type="text"
        placeholder="https://example.com/foo.png"
        v-model="editDeck.thumbnail"
      />
      <div class="preview"></div>
    </div>
    <div class="form_group d_flex justify_content_end">
      <button @click.prevent="closeModal" class="btn btn_danger">Close</button>
      <button class="btn btn_success ml_3" type="submit">
        {{ editDeck && editDeck.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    modalName: {
      type: String,
      required: false,
    },
    deck: {
      type: Object,
      required: false,
      default: () => ({
        name: "",
        description: "",
        thumbnail: "",
      }),
    },
  },
  data() {
    return {
      editDeck: this.deck
        ? { ...this.deck }
        : {
            name: "",
            description: "",
            thumbnail: "",
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editDeck);
    },
    closeModal() {
      this.$modal.close({ name: this.modalName });
    },
  },
};
</script>
<template>
  <div modal="true">
    <div>
      <div :data-modal="name" v-if="visible" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VModal from "./handle.js";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    };
  },
  methods: {
    open(params) {
      this.payload = params.payload;
      this.visible = true;
    },
    close(params) {
      this.visible = false;
    },
  },
  beforeMount() {
    // open event
    VModal.EventBus.$on("open", (params) => {
      if (this.name === params.name) {
        this.open(params);
      }
    });

    VModal.EventBus.$on("close", params => {
      if (this.name === params.name) {
        this.close(params);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
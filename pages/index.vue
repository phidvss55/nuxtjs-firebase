<template>
  <div>
    <div class="banner">
      <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center mx_3">3 Popular Deck</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "The Deck",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for improving your englisk skills",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .banner {
    height: 220px;
    margin-top: 3rem;
    .thumbnail-banner {
      background: url('https://phutungxeotohyundai.com.vn/wp-content/uploads/demo-banner-1.jpg') center center;
      height: inherit;
      background-size: cover;
    }
  }
</style>

<template>
  <div class="c_3">
    <div class="card">
      <div class="front-card">
        <img :src="card.picture" />
      </div>
      <div class="back-card">
        <h5>{{ card.keywork }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardList',
    props: {
        card: {
            type: Object,
            default: null, 
        }
    }
}
</script>
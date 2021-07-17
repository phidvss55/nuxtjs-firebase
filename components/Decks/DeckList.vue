<template>
  <li>
    <nuxt-link :to="`/decks/${deck._id}`" class="deck">
      <div class="card deck-card">
        <img :src="deck.thumbnail" alt="Thumbnail card" />
        <div class="card_body">
          <h3>{{ deck.name }}</h3>
          <p>{{ deck.description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
    props: ['deck']
}
</script>
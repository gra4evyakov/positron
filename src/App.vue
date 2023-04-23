<script setup>
import TheContainer from './components/TheContainer.vue';
import TheCart from './components/TheCart.vue';
import TheHeader from './components/TheHeader.vue';
import TheViewed from './components/TheViewed.vue';
import { viewed } from './data/viewed';
import store from './store/store';


</script>

<template>
  <TheContainer>
    <TheHeader />
    <TheCart :products="store.getters.getCart" />
    <TheViewed :products="viewed" />
  </TheContainer>
</template>

<style scoped>
</style>

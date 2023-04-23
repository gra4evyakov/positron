<script setup>
import TheSwiper from './TheSwiper.vue';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="viewed">
        <h3 class="viewed-title">Просмотренные товары</h3>
        <TheSwiper :products="products" />
    </div>
</template>

<style scoped>
.viewed-title {
    font-weight: 700;
    font-size: 30px;
}
</style>

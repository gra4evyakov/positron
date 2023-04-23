<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import MyCard from './MyCard.vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <swiper slides-per-view="4" :pagination="{ type: 'fraction' }" :navigation="true" :modules="[Pagination, Navigation]">
        <swiper-slide v-for="product in products">
            <MyCard :product="product" />
        </swiper-slide>
    </swiper>
</template>

<style>
.swiper {
    position: relative;
    top: -47px;
    padding-top: 105px;
}

.swiper-pagination-fraction {
    top: 0;
    bottom: auto;
}

.swiper-button-next {
    width: 50px;
    height: 50px;
    top: 25px;
    background: #90A2B5;
    border-radius: 50%;
}

.swiper-button-next::after {
    color: white;
    font-size: 20px;
}

.swiper-button-prev {
    width: 50px;
    height: 50px;
    top: 25px;
    left: auto;
    right: 130px;
    background: #90A2B5;
    border-radius: 50%;
}

.swiper-button-prev::after {
    color: white;
    font-size: 20px;
}

.swiper-pagination-fraction {
    width: auto;
    right: 0;
    left: auto;
}

.swiper-pagination {
    font-size: 18px;
    color: #797B86;
    top: 10px;
    right: 70px;
}

.swiper-pagination-current {
    font-size: 24px;
    line-height: 150%;
    color: #212121;
}
</style>

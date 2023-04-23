<script setup>
import MyButton from './MyButton.vue'
import CloseIcon from './svg/CloseIcon.vue';
import { useStore } from 'vuex';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    type: {
        type: String,
        default: 'default',
    }
})
const store = useStore()
const removeItem = (product) => {
    store.dispatch('removeItem', product);
};

const plusQuantity = (product) => {
    store.dispatch('incrementProduct', product)
}
const minusQuantity = (product) => {
    store.dispatch('decrementProduct', product)
}
</script>

<template>
    <div :class="`card-${type}`">
        <img class="card-image" :src="product.image" :alt="product.name">
        <div class="card-text">
            <h3 class="card-title">
                <span v-if="type === 'cart'">{{ product.name }} {{ product.model }}</span>
                <span v-else>{{ product.model }}</span>
            </h3>
            <p class="card-description">
                <span v-if="type === 'cart'">{{ product.features }}</span>
                <span v-else>{{ product.description }}</span>
            </p>
            <span v-if="type === 'cart'" class="card-article">
                Артикул: {{ product.article }}
            </span>
        </div>
        <div v-if="type === 'cart'" class="card-actions">
            <button @click="minusQuantity(product)" class="card-actions__btn">-</button>
            <span class="card-actions__count">{{ product.quantity }}</span>
            <button @click="plusQuantity(product)" class="card-actions__btn">+</button>
        </div>
        <div class="card-price">
            <span v-if="type === 'cart'" class="card-price__current">{{ product.price }} ₽</span>
            <div v-else class="card-price__range">
                <span>{{ product.range.ru }}</span>
                <span>{{ product.range.eu }}</span>
            </div>
        </div>
        <CloseIcon v-if="type === 'cart'" @click="removeItem(product)" />
        <MyButton v-if="type === 'default'">Подробнее</MyButton>
    </div>
</template>

<style scoped>
/* DEFAULT */
.card-default {
    height: 563px;
    width: 305px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    background: #F6F8FA;
}

.card-default .card-image {
    width: 245px;
    height: 245px;
    margin-bottom: 5px;
}

.card-default .card-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 120.52%;
    margin-bottom: 10px;
}

.card-default .card-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
}

.card-default .card-price {
    margin-top: auto;
    margin-bottom: 20px;
}

.card-default .card-price__range span:first-child {
    display: block;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
}

.card-default .card-price__range span:last-child {
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797B86;
}

/* DEFAULT END*/

/* CART */
.card-cart {
    padding: 20px 5px;
    display: flex;
    align-items: center;
}

.card-cart .card-image {
    width: 100px;
    height: 100px;
    margin-right: 30px;
}

.card-cart .card-text {
    max-width: 263px;
}

.card-cart .card-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 145%;
    margin-bottom: 6px;
}

.card-cart .card-description {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    margin-bottom: 7px;
}

.card-cart .card-article {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
}

.card-cart .card-actions {
    width: 102px;
    height: 34px;
    display: flex;
    justify-content: center;
    gap: 2px;
    flex-grow: 1;
}

.card-cart .card-actions__btn {
    width: 32px;
    border: none;
    border-radius: 4px;
    background: #F6F8FA;
    cursor: pointer;
}

.card-cart .card-actions__count {
    width: 32px;
    padding: 6px 0;
    text-align: center;
    background: #F6F8FA;
}

.card-cart .card-price {
    flex-grow: 1;
    font-weight: 700;
    font-size: 18px;
    line-height: 145%;
    text-align: center;
}

.card-cart svg {
    cursor: pointer;
    align-self: flex-start;
}
</style>

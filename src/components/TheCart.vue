<script setup>
import { ref, watch, computed } from 'vue'
import store from '../store/store';

import MyCard from './MyCard.vue';
import TheTotal from './TheTotal.vue';
import InstallationIcon from './svg/InstallationIcon.vue'

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})
const isInstallation = ref(false)

watch(isInstallation, () => {
    store.commit('setInstallation', isInstallation.value)
})

const numberOfItemsText = computed(() => {
    const numberOfItems = store.getters.getCount
    if (numberOfItems % 10 === 1 && numberOfItems % 100 !== 11) {
        return `${numberOfItems} товар`
    } else if (
        numberOfItems % 10 >= 2 &&
        numberOfItems % 10 <= 4 &&
        (numberOfItems % 100 < 10 || numberOfItems % 100 >= 20)
    ) {
        return `${numberOfItems} товара`
    } else {
        return `${numberOfItems} товаров`
    }
})

const clearCart = () => {
    store.commit('clearCart')
}
</script>

<template>
    <div class="cart">
        <div class="cart-header">
            <h1 class="cart-header__title">Ваша корзина</h1>
            <span class="cart-header__counter">{{ numberOfItemsText }}</span>
            <button class="cart-header__clear" @click="clearCart">Очистить корзину</button>
        </div>
        <ul class="cart-list">
            <li v-for="product in products" class="cart-list__item">
                <MyCard :product="product" type="cart" />
            </li>
        </ul>
        <div class="cart-installation">
            <input class="cart-installation__checkbox" type="checkbox" v-model="isInstallation">
            <InstallationIcon />
            <div class="cart-installation__text">
                <span>Установка</span>
                <span>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</span>
            </div>
        </div>

        <TheTotal />
    </div>
</template>

<style scoped>
.cart {
    position: relative;
    max-width: 800px;
    height: 650px;
    margin-bottom: 60px;
}

.cart-header {
    display: grid;
    grid-template-columns: max-content max-content 1fr;
    align-items: baseline;
    margin-bottom: 52px;
}

.cart-header__title {
    display: inline;
    margin-right: 22px;
    font-weight: 700;
    font-size: 44px;
    line-height: 120.52%;
}

.cart-header__counter {
    font-weight: 400;
    font-size: 18px;
    line-height: 120.52%;
    color: #797B86;
}

.cart-header__clear {
    cursor: pointer;
    margin-left: auto;
    border: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-decoration-line: underline;
    color: #797B86;
}

.cart-list {
    list-style: none;
    margin-bottom: 25px;
}

.cart-list__item:not(:last-child) {
    border-bottom: 1px solid #C4C4C4;
}

.cart-installation {
    height: 102px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 25px;
    background: #F6F8FA;
    border-radius: 5px;
}

.cart-installation__checkbox {
    width: 20px;
    height: 20px;
}

.cart-installation__text span:first-child {
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
}

.cart-installation__text span:last-child {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
}
</style>

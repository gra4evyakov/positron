<script setup>
import { computed } from 'vue'
import store from '../store/store';

import CartIcon from './svg/CartIcon.vue';

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
</script>

<template>
    <header class="header">
        <div class="header-cart">
            <CartIcon />
            <div>
                <span class="header-cart__title">Ваша корзина</span>
                <span class="header-cart__counter">{{ numberOfItemsText }}</span>
                <span class="header-cart__total">{{ store.getters.getSum }} ₽</span>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    width: 100%;
    padding: 25px 0px;
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.header-cart {
    display: flex;
    align-items: center;
    gap: 12px;
}

.header-cart div {
    display: flex;
    flex-direction: column;
}

.header-cart__title {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
}

.header-cart__counter {
    color: #797B86;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
}

.header-cart__total {
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
}
</style>

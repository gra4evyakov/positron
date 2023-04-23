<script setup>
import MyButton from './MyButton.vue';
import store from '../store/store';

const submitForm = () => {
    store.dispatch('mocFetch')
}
</script>

<template>
    <div class="total">
        <h3 class="total-title">Итого</h3>
        <div class="total-info">
            <div class="total-info__sum">
                <span>Сумма заказа</span>
                <span>{{ store.getters.getSum }} ₽</span>
            </div>
            <div class="total-info__counter">
                <span>Количество</span>
                <span>{{ store.getters.getCount }} шт</span>
            </div>
            <div class="total-info__installation">
                <span>Установка</span>
                <span>{{ store.getters.getInstallation }}</span>
            </div>
        </div>
        <div class="total-price">
            <span>Стоимость товаров</span>
            <span>{{ store.getters.getSum }} ₽</span>
        </div>
        <form class="total-actions" @submit.prevent="submitForm">
            <MyButton type="submit">Оформить заказ</MyButton>
            <MyButton type="submit" color="white">Купить в 1 клик</MyButton>
        </form>
    </div>
</template>

<style scoped>
.total {
    position: absolute;
    top: 50%;
    right: calc(-425px - 60px);
    transform: translateY(-50%);
    width: 425px;
    height: 458px;
    padding: 35px 30px;
    background: #F6F8FA;
    border-radius: 5px;
}

.total-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 120.52%;
}

.total-info {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 30px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid #AEB0B6;
}

.total-info div {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
}

.total-price {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-weight: 700;
    font-size: 18px;
    line-height: 145%;
    margin-bottom: 32px;
}

.total-price span:last-child {
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
}

.total-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>

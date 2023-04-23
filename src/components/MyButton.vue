<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'blue'
    }
})
</script>

<template>
    <button class="btn" :class="color">
        <slot />
    </button>
</template>

<style scoped>
.btn {
    cursor: pointer;
    padding: 14px 0;
    width: 100%;
    border: 1px solid #0069B4;
    border-radius: 4px;
    font-size: 18px;
}

.btn.blue {
    color: #FFFFFF;
    background: #0069B4;
}

.btn.white {
    color: #0069B4;
    background: #FFFFFF;
}
</style>

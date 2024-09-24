<script setup lang="ts">
    import { useCartStore } from '../stores/cart'

    const cartStore = useCartStore()

</script>
<template>
    <div :class="{ basket: true, selected: cartStore.count > 0 }">Basket: {{ cartStore.count }} (items)</div>
</template>

<style scoped>
    .basket {
        display: inline-block;
        padding: 5px 10px;
        background-color: #7f8c8d;
        color: #ecf0f1;
        border-radius: 5px;
    }

    .selected {
        background-color: #27ae60;
    }
</style>
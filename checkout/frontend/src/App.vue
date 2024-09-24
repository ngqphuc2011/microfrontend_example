<script setup lang="ts">
  import BuyingButton from './components/BuyingButton.vue';
  import Cart from './components/Cart.vue';
</script>

<template>
  <div>
    <Cart />
    <BuyingButton :price="2" />
  </div>
</template>

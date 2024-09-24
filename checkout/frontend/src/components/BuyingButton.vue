<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const price = ref(0);
const bc = new BroadcastChannel('demo_app')
bc.onmessage = (event: MessageEvent<{ name: string, payload: number}>) => {
  if (event?.data.name === 'demoApp:update:selecteProduct') {
    price.value = event.data.payload as number
  }

}

const clickHandler = () => {
  cartStore.increment()
}

</script>

<template>
  <button class="buying-button" @click="clickHandler">Buy for {{ price }}</button>
</template>

<style scoped>
.buying-button {
  padding: 20px;
  background: none;
  outline: none;
  border: 1px solid;
  border-radius: 20px;
  min-width: 200px;
  font-size: 1rem;
  border-color: aquamarine;
}
</style>

import { defineStore } from "pinia";

export const useCartStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

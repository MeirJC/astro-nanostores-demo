<script setup lang="ts">
import { incrementPersistent } from "@stores/handling-state/persistentCounterStore";

const increment = () => {
  incrementPersistent();
};
</script>

<template>
  <button
    @click="increment"
    class="border-vue-500 hover:border-vue-600 hover:bg-vue-500/20 focus-visible:ring-vue-300 flex size-10 items-center justify-center rounded-lg border-2 px-4 transition-colors focus-visible:ring-1 focus-visible:outline-hidden"
  >
    +
  </button>
</template>

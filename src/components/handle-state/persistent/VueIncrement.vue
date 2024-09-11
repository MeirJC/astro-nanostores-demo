<script setup lang="ts">
import { incrementPersistent } from "@stores/handeling-state/persistentConterStore";

const increment = () => {
  incrementPersistent();
};
</script>

<template>
  <button
    @click="increment"
    class="flex size-10 items-center justify-center rounded-lg border-2 border-vue-500 px-4 transition-colors hover:border-vue-600 hover:bg-vue-500/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vue-300"
  >
    +
  </button>
</template>

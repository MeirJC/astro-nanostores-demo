<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { $count, increment, decrement } from "@stores/handling-state/sharedCounterStore";

const count = useStore($count);
</script>

<template>
  <div class="bg-vue-100 rounded-lg p-4 shadow-md">
    <h2 class="text-vue-800 mb-4 text-center text-2xl font-bold">Vue Counter (Shared State)</h2>
    <div class="flex items-center justify-center gap-6 text-3xl font-semibold">
      <button
        @click="decrement"
        class="bg-vue-500 hover:bg-vue-600 rounded px-4 py-2 text-white transition-colors"
      >
        -
      </button>
      <p class="text-vue-600">{{ count }}</p>
      <button
        @click="increment"
        class="bg-vue-500 hover:bg-vue-600 rounded px-4 py-2 text-white transition-colors"
      >
        +
      </button>
    </div>
  </div>
</template>

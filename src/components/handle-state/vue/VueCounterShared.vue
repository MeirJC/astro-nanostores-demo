<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { count, increment, decrement } from "@stores/handeling-state/sharedCounterStore";

const $count = useStore(count);
</script>

<template>
  <div class="rounded-lg bg-vue-100 p-4 shadow-md">
    <h2 class="mb-4 text-center text-2xl font-bold text-vue-800">Vue Counter (Shared State)</h2>
    <div class="flex items-center justify-center gap-6 text-3xl font-semibold">
      <button @click="decrement" class="rounded bg-vue-500 px-4 py-2 text-white transition-colors hover:bg-vue-600">
        -
      </button>
      <p class="text-vue-600">{{ $count }}</p>
      <button @click="increment" class="rounded bg-vue-500 px-4 py-2 text-white transition-colors hover:bg-vue-600">
        +
      </button>
    </div>
  </div>
</template>

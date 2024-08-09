<template>
  <div class="rounded-lg bg-teal-100 p-4 shadow-md">
    <h2 class="mb-2 text-xl font-bold text-teal-800">Vue Counter (Shared State)</h2>
    <p class="mb-4 text-2xl font-semibold text-teal-600">{{ count }}</p>
    <div class="flex space-x-2">
      <button @click="decrement" class="rounded bg-teal-500 px-4 py-2 text-white transition-colors hover:bg-teal-600">
        -
      </button>
      <button @click="increment" class="rounded bg-teal-500 px-4 py-2 text-white transition-colors hover:bg-teal-600">
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { count, increment, decrement } from '@stores/counterStore';

const $count = useStore(count);
</script>
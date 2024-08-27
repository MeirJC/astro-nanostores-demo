<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { count, increment, decrement } from '@stores/sharedCounterStore';

const $count = useStore(count);
</script>

<template>
  <div class="p-4 bg-vue-100 rounded-lg shadow-md">
    <h2 class="mb-4 text-center text-2xl font-bold text-vue-800">Vue Counter (Shared State)</h2>
    <div class="flex items-center justify-center gap-6 text-3xl font-semibold">
      <button @click="decrement" class="px-4 py-2 bg-vue-500 text-white rounded hover:bg-vue-600 transition-colors">
        -
      </button>
      <p class="text-vue-600">{{ $count }}</p>
      <button @click="increment" class="px-4 py-2 bg-vue-500 text-white rounded hover:bg-vue-600 transition-colors">
        +
      </button>
    </div>
  </div>
</template>
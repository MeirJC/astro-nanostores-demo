<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { vueCount, vueIncrement, vueDecrement } from '@stores/independentCounterStore';

const count = useStore(vueCount);
</script>

<template>
  <div class="p-4 bg-vue-100 rounded-lg shadow-md">
    <h2 class="mb-4 text-center text-2xl font-bold text-vue-800">Independent Vue Counter</h2>
    <div class="flex items-center justify-center gap-6 text-3xl font-semibold">
      <button @click="vueDecrement" class="px-4 py-2 bg-vue-500 text-white rounded hover:bg-vue-600 transition-colors">
        -
      </button>
      <p class="text-vue-600">{{ count }}</p>
      <button @click="vueIncrement" class="px-4 py-2 bg-vue-500 text-white rounded hover:bg-vue-600 transition-colors">
        +
      </button>
    </div>
  </div>
</template>
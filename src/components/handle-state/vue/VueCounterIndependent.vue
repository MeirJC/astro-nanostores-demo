<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import {
  $vueCount,
  vueIncrement,
  vueDecrement,
} from "@stores/handling-state/independentCounterStore";

const count = useStore($vueCount);
</script>

<template>
  <div class="bg-vue-100 rounded-lg p-4 shadow-md">
    <h2 class="text-vue-800 mb-4 text-center text-2xl font-bold">Independent Vue Counter</h2>
    <div class="flex items-center justify-center gap-6 text-3xl font-semibold">
      <button
        @click="vueDecrement"
        class="bg-vue-500 hover:bg-vue-600 rounded px-4 py-2 text-white transition-colors"
      >
        -
      </button>
      <p class="text-vue-600">{{ count }}</p>
      <button
        @click="vueIncrement"
        class="bg-vue-500 hover:bg-vue-600 rounded px-4 py-2 text-white transition-colors"
      >
        +
      </button>
    </div>
  </div>
</template>

<template>
  <div class="rounded-lg bg-pink-100 p-4 shadow-md">
    <h2 class="mb-2 text-xl font-bold text-pink-800">Vue Counter (Independent State)</h2>
    <p class="mb-4 text-2xl font-semibold text-pink-600">{{ count }}</p>
    <div class="flex space-x-2">
      <button @click="decrement" class="rounded bg-pink-500 px-4 py-2 text-white transition-colors hover:bg-pink-600">
        -
      </button>
      <button @click="increment" class="rounded bg-pink-500 px-4 py-2 text-white transition-colors hover:bg-pink-600">
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { vueCount } from '@stores/isoCounterStore';

const count = useStore(vueCount);

function increment() {
  vueCount.set(count.value + 1);
}

function decrement() {
  vueCount.set(count.value - 1);
}
</script>
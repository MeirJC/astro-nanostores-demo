<script setup lang="ts">
import { incrementPersistent } from '@stores/handeling-state/persistentConterStore';

const increment = () => {
  incrementPersistent();
};
</script>

<template>
  <button @click="increment"
    class="flex items-center justify-center size-10 rounded-lg border-2 border-vue-500 px-4 transition-colors hover:border-vue-600 hover:bg-vue-500/20">
    +
  </button>
</template>

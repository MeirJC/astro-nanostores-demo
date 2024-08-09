<script lang="ts">
  import { svelteCount, svelteIncrement, svelteDecrement } from '@stores/isoCounterStore.ts';
</script>

<div class="p-4 bg-yellow-100 rounded-lg shadow-md">
  <h2 class="text-xl font-bold mb-2 text-yellow-800">Independent Svelte Counter</h2>
  <p class="text-2xl font-semibold mb-4 text-yellow-600">{$svelteCount}</p>
  <div class="flex space-x-2">
    <button
      on:click={svelteDecrement}
      class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
    >
      -
    </button>
    <button
      on:click={svelteIncrement}
      class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
    >
      +
    </button>
  </div>
</div>

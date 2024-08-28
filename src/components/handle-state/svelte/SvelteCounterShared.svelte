<script lang="ts">
  import { count, increment, decrement } from "@stores/handeling-state/sharedCounterStore";
</script>

<div class="p-4 bg-svelte-100 rounded-lg shadow-md">
  <h2 class="mb-4 text-center text-2xl font-bold text-svelte-800">Svelte Counter (Shared State)</h2>
  <div class="flex items-center justify-center gap-6 text-3xl font-semibold">
    <button
      on:click={decrement}
      class="px-4 py-2 bg-svelte-500 text-white rounded hover:bg-svelte-600 transition-colors"
    >
      -
    </button>
    <p class="text-svelte-600">{$count}</p>
    <button
      on:click={increment}
      class="px-4 py-2 bg-svelte-500 text-white rounded hover:bg-svelte-600 transition-colors"
    >
      +
    </button>
  </div>
</div>

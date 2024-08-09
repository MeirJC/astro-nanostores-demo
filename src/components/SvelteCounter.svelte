<script lang="ts">
  import { count, increment, decrement } from '@stores/counterStore';
</script>

<div class="p-4 bg-green-100 rounded-lg shadow-md">
  <h2 class="text-xl font-bold mb-2 text-green-800">Svelte Counter</h2>
  <p class="text-2xl font-semibold mb-4 text-green-600">{$count}</p>
  <div class="flex space-x-2">
    <button
      on:click={decrement}
      class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      -
    </button>
    <button
      on:click={increment}
      class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      +
    </button>
  </div>
</div>

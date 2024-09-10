<script lang="ts">
  import { persistentCounter } from "@stores/handeling-state/persistentConterStore";
  import {
    reactCount,
    svelteCount,
    astroCount,
    vueCount,
  } from "@stores/handeling-state/independentCounterStore";
  import { count as sharedCount } from "@stores/handeling-state/sharedCounterStore";
  import {
    funResult,
    incrementPersistent,
    reactIncrement,
    svelteIncrement,
    astroIncrement,
    vueIncrement,
    incrementShared,
  } from "@stores/handeling-state/funMathCombinedStore";

  $: result = $funResult;
</script>

<div class="bg-gray-800 rounded-lg p-6 mt-8 shadow-lg">
  <h3 class="text-2xl font-bold text-center text-beige mb-4">State Management Fun!</h3>
  <div class="grid grid-cols-2 gap-4 mb-6">
    <button
      on:click={incrementPersistent}
      class="bg-astro-500 text-white px-4 py-2 rounded hover:bg-astro-600 transition-colors"
    >
      Persistent: {$persistentCounter}
    </button>
    <button
      on:click={reactIncrement}
      class="bg-react-500 text-white px-4 py-2 rounded hover:bg-react-600 transition-colors"
    >
      React: {$reactCount}
    </button>
    <button
      on:click={svelteIncrement}
      class="bg-svelte-500 text-white px-4 py-2 rounded hover:bg-svelte-600 transition-colors"
    >
      Svelte: {$svelteCount}
    </button>
    <button
      on:click={astroIncrement}
      class="bg-astro-500 text-white px-4 py-2 rounded hover:bg-astro-600 transition-colors"
    >
      Astro: {$astroCount}
    </button>
    <button
      on:click={vueIncrement}
      class="bg-vue-500 text-white px-4 py-2 rounded hover:bg-vue-600 transition-colors"
    >
      Vue: {$vueCount}
    </button>
    <button
      on:click={incrementShared}
      class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
    >
      Shared: {$sharedCount}
    </button>
  </div>
  <div class="text-center">
    <p class="text-6xl mb-4">{result.emoji}</p>
    <p class="text-beige mb-2">{result.calculation}</p>
    <p class="text-astro-300 italic">"{result.quote}"</p>
    <p class="text-beige mt-4">Total: {result.total}</p>
  </div>
</div>

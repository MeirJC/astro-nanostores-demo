<script lang="ts">
  import { $persistentCounter as persistentCounter } from "@stores/handling-state/persistentCounterStore";
  import {
    $reactCount as reactCount,
    $svelteCount as svelteCount,
    $astroCount as astroCount,
    $vueCount as vueCount,
  } from "@stores/handling-state/independentCounterStore";
  import { $count as sharedCount } from "@stores/handling-state/sharedCounterStore";
  import {
    $funResult as funResult,
    incrementPersistent,
    reactIncrement,
    svelteIncrement,
    astroIncrement,
    vueIncrement,
    incrementShared,
  } from "@stores/handling-state/funMathCombinedStore";

  let result = $derived($funResult);
</script>

<div class="bg-gray-800 rounded-lg p-6 mt-8 shadow-lg">
  <h3 class="text-2xl font-bold text-center text-beige mb-4">State Management Fun!</h3>
  <div class="grid grid-cols-2 gap-4 mb-6">
    <button
      onclick={incrementPersistent}
      class="bg-astro-500 text-white px-4 py-2 rounded hover:bg-astro-600 transition-colors"
    >
      Persistent: {$persistentCounter}
    </button>
    <button
      onclick={reactIncrement}
      class="bg-react-500 text-white px-4 py-2 rounded hover:bg-react-600 transition-colors"
    >
      React: {$reactCount}
    </button>
    <button
      onclick={svelteIncrement}
      class="bg-svelte-500 text-white px-4 py-2 rounded hover:bg-svelte-600 transition-colors"
    >
      Svelte: {$svelteCount}
    </button>
    <button
      onclick={astroIncrement}
      class="bg-astro-500 text-white px-4 py-2 rounded hover:bg-astro-600 transition-colors"
    >
      Astro: {$astroCount}
    </button>
    <button
      onclick={vueIncrement}
      class="bg-vue-500 text-white px-4 py-2 rounded hover:bg-vue-600 transition-colors"
    >
      Vue: {$vueCount}
    </button>
    <button
      onclick={incrementShared}
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

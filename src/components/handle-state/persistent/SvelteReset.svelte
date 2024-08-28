<script lang="ts">
  import { resetPersistent } from "@stores/handeling-state/persistentConterStore";
</script>

<button
  on:click={resetPersistent}
  class="flex items-center justify-center h-10 border-2 border-svelte-500 rounded-lg hover:border-svelte-600 hover:bg-svelte-500/20 transition-colors duration-300 w-20 mr-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-svelte-300"
>
  Reset
</button>

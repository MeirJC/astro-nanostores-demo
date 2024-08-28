<script lang="ts">
  import { persistentCounter } from "@stores/handeling-state/persistentConterStore";
</script>

<div
  class="border-2 px-4 py-2 border-svelte-500 rounded-lg h-10 flex items-center justify-center min-w-20"
>
  {$persistentCounter}
</div>

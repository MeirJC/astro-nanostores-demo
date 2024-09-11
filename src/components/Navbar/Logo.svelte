<script lang="ts">
  export let astroLogo: string;
  export let nanostoresLogo: string;
</script>

<a class="flex items-center gap-2 rounded-xl bg-gray-500/40 p-1" href="/" title="Home">
  <img src={astroLogo} alt="Astro logo" class="w-9 h-9" />
  <span class="block self-center bg-amber-400 bg-clip-text pb-2 text-4xl font-bold text-transparent"
    >+</span
  >
  <img src={nanostoresLogo} alt="Nanostores logo" class="w-10 h-10" />
</a>

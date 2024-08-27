<script lang="ts">
  import { slide } from 'svelte/transition';

  export let items: Array<{ href: string; text: string }>;
</script>

<ul
  transition:slide={{ duration: 200 }}
  class="absolute left-0 mt-2 space-y-2 bg-gray-800 rounded-md p-2"
  on:mouseenter
  on:mouseleave
>
  {#each items as subItem}
    <li>
      <a
        href={subItem.href}
        class="text-beige hover:text-astro-300 whitespace-nowrap block px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
      >
        {subItem.text}
      </a>
    </li>
  {/each}
</ul>

<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import { slide } from 'svelte/transition';

  interface Props {
    items: Array<{ href: string; text: string }>;
  }

  let { items }: Props = $props();
</script>

<ul
  transition:slide={{ duration: 200 }}
  class="absolute left-0 mt-2 space-y-2 bg-gray-800 rounded-md p-2"
  onmouseenter={bubble('mouseenter')}
  onmouseleave={bubble('mouseleave')}
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

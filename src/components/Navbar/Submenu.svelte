<script lang="ts">
  interface Props {
    items: Array<{ href: string; text: string }>;
    onmouseenter?: (e: MouseEvent) => void;
    onmouseleave?: (e: MouseEvent) => void;
  }

  let { items, onmouseenter, onmouseleave }: Props = $props();
</script>

<ul
  class="absolute left-0 mt-2 space-y-2 bg-gray-800 rounded-md p-2"
  {onmouseenter}
  {onmouseleave}
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

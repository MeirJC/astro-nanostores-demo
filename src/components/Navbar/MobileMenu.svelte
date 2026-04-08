<script lang="ts">
  import { navItems } from "@data/links";

  interface Props {
    currentPath: string;
    onclose: () => void;
  }

  let { currentPath, onclose }: Props = $props();

  let openSubmenu: number | null = $state(null);

  function toggleSubmenu(index: number) {
    openSubmenu = openSubmenu === index ? null : index;
  }
</script>

<div
  class="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-md pt-20"
>
  <ul class="container mx-auto px-4 space-y-4">
    {#each navItems as item, index}
      <li>
        {#if item.subItems}
          <button
            class="flex items-center justify-between w-full text-beige text-xl py-2 {currentPath.startsWith(
              item.href
            )
              ? 'text-astro-500 font-bold'
              : ''}"
            onclick={() => toggleSubmenu(index)}
            aria-expanded={openSubmenu === index}
          >
            {item.text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 transition-transform duration-200 {openSubmenu === index
                ? 'rotate-180'
                : ''}"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        {:else}
          <a
            href={item.href}
            class="block w-full text-beige text-xl py-2 {currentPath.startsWith(item.href)
              ? 'text-astro-500 font-bold'
              : ''}"
            onclick={onclose}
          >
            {item.text}
          </a>
        {/if}

        {#if item.subItems && openSubmenu === index}
          <ul class="ml-4 mt-2 space-y-2">
            {#each item.subItems as subItem}
              <li>
                <a
                  href={subItem.href}
                  class="text-beige hover:text-astro-300 block py-2"
                  onclick={onclose}
                >
                  {subItem.text}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>

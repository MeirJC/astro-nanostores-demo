<script lang="ts">
  import { slide } from "svelte/transition";
  import { navItems } from "@data/links";
  import { createEventDispatcher } from "svelte";

  export let currentPath: string;

  let openSubmenu: number | null = null;

  const dispatch = createEventDispatcher();

  function toggleSubmenu(index: number) {
    if (index === 0) {
      window.location.href = navItems[0].href;
    } else {
      openSubmenu = openSubmenu === index ? null : index;
    }
  }
</script>

<div
  transition:slide={{ duration: 300 }}
  class="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-md pt-20"
>
  <ul class="container mx-auto px-4 space-y-4">
    {#each navItems as item, index}
      <li>
        <!-- if index is 0, also navigate to the item.href (homepage)-->
        <button
          class="flex items-center justify-between w-full text-beige text-xl py-2 {currentPath.startsWith(
            item.href
          )
            ? 'text-astro-500 font-bold'
            : ''}"
          on:click={() => {
            toggleSubmenu(index);
          }}
          aria-expanded={openSubmenu === index}
        >
          {item.text}
          {#if item.subItems}
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
          {/if}
        </button>
        {#if item.subItems && openSubmenu === index}
          <ul transition:slide={{ duration: 200 }} class="ml-4 mt-2 space-y-2">
            {#each item.subItems as subItem}
              <li>
                <a
                  href={subItem.href}
                  class="text-beige hover:text-astro-300 block py-2"
                  on:click={() => dispatch("close")}
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

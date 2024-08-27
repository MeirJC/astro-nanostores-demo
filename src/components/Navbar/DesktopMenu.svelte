<script lang="ts">
  import { slide } from 'svelte/transition';
  import { navItems } from './navItems';
  import Submenu from './Submenu.svelte';

  export let currentPath: string;

  let openSubmenu: number | null = null;
  let hoverTimeout: number;

  function openSubmenuWithDelay(index: number) {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      openSubmenu = index;
    }, 100);
  }

  function closeSubmenuWithDelay() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      openSubmenu = null;
    }, 300);
  }

  function handleKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openSubmenu = openSubmenu === index ? null : index;
    } else if (event.key === 'Escape') {
      openSubmenu = null;
    }
  }
</script>

<ul class="flex space-x-6">
  {#each navItems as item, index}
    <li
      class="relative"
      on:mouseenter={() => openSubmenuWithDelay(index)}
      on:mouseleave={closeSubmenuWithDelay}
    >
      <a
        href={item.href}
        class="flex items-center text-beige hover:text-astro-300 transition-colors duration-200 {currentPath.startsWith(
          item.href
        )
          ? 'text-astro-500 font-bold'
          : ''}"
        on:keydown={(e) => handleKeydown(e, index)}
        aria-haspopup={item.subItems ? 'true' : 'false'}
        aria-expanded={openSubmenu === index}
      >
        {item.text}
        {#if item.subItems}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1 transition-transform duration-200 {openSubmenu === index
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
      </a>
      {#if item.subItems && openSubmenu === index}
        <Submenu items={item.subItems} on:mouseleave={closeSubmenuWithDelay} />
      {/if}
    </li>
  {/each}
</ul>

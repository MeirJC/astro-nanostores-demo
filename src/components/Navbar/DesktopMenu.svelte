<script lang="ts">
  import { navItems } from "@data/links";
  import Submenu from "./Submenu.svelte";

  interface Props {
    currentPath: string;
  }

  let { currentPath }: Props = $props();

  let openSubmenu: number | null = $state(null);
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
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openSubmenu = openSubmenu === index ? null : index;
    } else if (event.key === "Escape") {
      openSubmenu = null;
    }
  }
</script>

<ul class="flex space-x-6">
  {#each navItems as item, index}
    <li
      class="relative"
      onmouseenter={() => openSubmenuWithDelay(index)}
      onmouseleave={closeSubmenuWithDelay}
    >
      <a
        href={item.href}
        class="flex items-center text-beige hover:text-astro-300 transition-colors duration-200 {currentPath.startsWith(
          item.href
        )
          ? 'text-astro-500 font-bold'
          : ''}"
        onkeydown={(e) => handleKeydown(e, index)}
        aria-haspopup={item.subItems ? "true" : "false"}
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
        <Submenu
          items={item.subItems}
          onmouseenter={() => openSubmenuWithDelay(index)}
          onmouseleave={closeSubmenuWithDelay}
        />
      {/if}
    </li>
  {/each}
</ul>

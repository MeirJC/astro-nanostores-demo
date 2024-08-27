<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { spring } from 'svelte/motion';
  import Logo from './Logo.svelte';
  import DesktopMenu from './DesktopMenu.svelte';
  import MobileMenu from './MobileMenu.svelte';

  export let astroLogo: string;
  export let nanostoresLogo: string;
  export let currentPath: string;

  let isOpen = false;
  let isMobile = false;
  let isVisible = true;
  let lastScrollY = 0;
  let navbar: HTMLElement;

  const translateY = spring(0, {
    stiffness: 1.5,
    damping: 1.0
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }

  let scrollTimer: number;
  function handleScroll() {
    const currentScrollY = window.scrollY;
    clearTimeout(scrollTimer);
    
    if (currentScrollY < lastScrollY) {
      isVisible = true;
    } else if (currentScrollY > lastScrollY && currentScrollY > navbar.clientHeight) {
      isVisible = false;
    }
    lastScrollY = currentScrollY;
    
    scrollTimer = setTimeout(() => {
      translateY.set(isVisible ? 0 : -navbar.clientHeight);
    }, 50);
  }

  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    isMobile = mediaQuery.matches;

    const handleResize = (e: MediaQueryListEvent) => {
      isMobile = e.matches;
      if (!isMobile) {
        isOpen = false;
      }
    };

    mediaQuery.addEventListener('change', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  onDestroy(() => {
    clearTimeout(scrollTimer);
  });
</script>

<nav
  bind:this={navbar}
  class="fixed left-0 right-0 top-0 z-50 bg-gray-900/90 p-4 backdrop-blur-md transition-transform duration-300"
  style="transform: translateY({$translateY}px);"
>
  <div class="container mx-auto flex items-center justify-between px-4">
    <Logo {astroLogo} {nanostoresLogo} />

    {#if isMobile}
      <button on:click={toggleMenu} class="text-beige">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    {:else}
      <DesktopMenu {currentPath} />
    {/if}
  </div>
</nav>

{#if isMobile && isOpen}
  <MobileMenu {currentPath} on:close={toggleMenu} />
{/if}

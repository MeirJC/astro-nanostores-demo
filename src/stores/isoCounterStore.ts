import { atom } from 'nanostores';

// React counter - Not shared
export const reactCount = atom(0);

export function reactIncrement() {
  reactCount.set(reactCount.get() + 1);
}

export function reactDecrement() {
  if (reactCount.value > 0) reactCount.set(reactCount.get() - 1);
}

// Svelte counter - Not shared
export const svelteCount = atom(0);

export function svelteIncrement() {
  svelteCount.set(svelteCount.get() + 1);
}

export function svelteDecrement() {
  if (svelteCount.value > 0) svelteCount.set(svelteCount.get() - 1);
}

// Astro counter - Not shared
export const astroCount = atom(0);

export function astroIncrement() {
  astroCount.set(astroCount.get() + 1);
}

export function astroDecrement() {
  if (astroCount.value > 0) astroCount.set(astroCount.get() - 1);
}
// Vue counter - Not shared
export const vueCount = atom(0);

export function vueIncrement() {
  vueCount.set(vueCount.get() + 1);
}

export function vueDecrement() {
  if (vueCount.value > 0) vueCount.set(vueCount.get() - 1);
}

// src/stores/reactCounterStore.ts
import { atom } from 'nanostores';

export const reactCount = atom(0);

export function reactIncrement() {
  reactCount.set(reactCount.get() + 1);
}

export function reactDecrement() {
  reactCount.set(reactCount.get() - 1);
}

// src/stores/svelteCounterStore.ts

export const svelteCount = atom(0);

export function svelteIncrement() {
  svelteCount.set(svelteCount.get() + 1);
}

export function svelteDecrement() {
  svelteCount.set(svelteCount.get() - 1);
}

// src/stores/astroCounterStore.ts

export const astroCount = atom(0);

export function astroIncrement() {
  astroCount.set(astroCount.get() + 1);
}

export function astroDecrement() {
  astroCount.set(astroCount.get() - 1);
}

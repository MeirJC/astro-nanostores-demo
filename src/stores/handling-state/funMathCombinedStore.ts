// src/stores/funMathCombinedStore.ts
import { computed } from "nanostores";
import { $persistentCounter } from "@stores/handling-state/persistentCounterStore";
import {
  $reactCount,
  $svelteCount,
  $astroCount,
  $vueCount,
} from "@stores/handling-state/independentCounterStore";
import { $count as $sharedCount } from "@stores/handling-state/sharedCounterStore";

export const $funResult = computed(
  [$persistentCounter, $reactCount, $svelteCount, $astroCount, $vueCount, $sharedCount],
  (persistent, react, svelte, astro, vue, shared) => {
    const total = persistent + react + svelte + astro + vue + shared;
    let emoji = "🤔";
    let calculation = "";
    let quote = "";

    if (total % 2 === 0) {
      emoji = "😄";
      calculation = `${total} is even (divisible by 2)`;
      quote = "State management is like a box of chocolates. You never know what you're gonna get.";
    } else if (total % 3 === 0) {
      emoji = "🎭";
      calculation = `${total} is divisible by 3`;
      quote = "I used to have a handle on state management, but then they added more features.";
    } else if (total % 5 === 0) {
      emoji = "🚀";
      calculation = `${total} is divisible by 5`;
      quote = "State management: because apparently, global variables were too easy.";
    } else if (total % 7 === 0) {
      emoji = "🌈";
      calculation = `${total} is divisible by 7`;
      quote = "I don't always manage state, but when I do, I prefer Nanostores.";
    } else if (isPrime(total)) {
      emoji = "🦄";
      calculation = `${total} is a prime number`;
      quote =
        "State management is like juggling. It's impressive when you get it right, hilarious when you don't.";
    }

    return { emoji, calculation, quote, total };
  }
);

function isPrime(num: number): boolean {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) if (num % i === 0) return false;
  return num > 1;
}

// Export the increment functions from your existing stores
export {
  incrementPersistent,
  decrementPersistent,
  resetPersistent,
} from "@stores/handling-state/persistentCounterStore";
export {
  reactIncrement,
  svelteIncrement,
  astroIncrement,
  vueIncrement,
} from "@stores/handling-state/independentCounterStore";
export {
  increment as incrementShared,
  decrement as decrementShared,
} from "@stores/handling-state/sharedCounterStore";

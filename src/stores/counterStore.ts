import { atom } from 'nanostores';

export const count = atom(0);

export function increment() {
  count.set(count.get() + 1);
}

export function decrement() {
  count.set(count.get() - 1);
}

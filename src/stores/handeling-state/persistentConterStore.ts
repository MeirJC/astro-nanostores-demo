import { persistentAtom } from "@nanostores/persistent";

export const persistentCounter = persistentAtom("persistentCounter", 0, {
  encode: (value) => value.toString(),
  decode: (value) => parseInt(value),
});

export function incrementPersistent() {
  persistentCounter.set(persistentCounter.get() + 1);
}

export function decrementPersistent() {
  persistentCounter.set(persistentCounter.get() - 1);
}

export function resetPersistent() {
  persistentCounter.set(0);
}

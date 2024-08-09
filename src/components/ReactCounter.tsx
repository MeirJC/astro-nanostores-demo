import React from 'react';
import { useStore } from '@nanostores/react';
import { count, increment, decrement } from '@stores/counterStore';
// stores/counterStore.ts
export function ReactCounter() {
  const $count = useStore(count);

  return (
    <div className="rounded-lg bg-blue-100 p-4 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-blue-800">React Counter</h2>
      <p className="mb-4 text-2xl font-semibold text-blue-600">{$count}</p>
      <div className="flex space-x-2">
        <button
          onClick={decrement}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          -
        </button>
        <button
          onClick={increment}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

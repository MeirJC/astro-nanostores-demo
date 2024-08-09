import React from 'react';
import { useStore } from '@nanostores/react';
import { reactCount, reactIncrement, reactDecrement } from '@stores/isoCounterStore.ts';

export function IndependentReactCounter() {
  const $count = useStore(reactCount);

  return (
    <div className="rounded-lg bg-red-100 p-4 shadow-md">
      <h2 className="mb-2 text-xl font-bold text-red-800">Independent React Counter</h2>
      <p className="mb-4 text-2xl font-semibold text-red-600">{$count}</p>
      <div className="flex space-x-2">
        <button
          onClick={reactDecrement}
          className="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={reactIncrement}
          className="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

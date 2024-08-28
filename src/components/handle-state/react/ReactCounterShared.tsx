import { useStore } from "@nanostores/react";
import { count, increment, decrement } from "@stores/handeling-state/sharedCounterStore";

export function ReactCounterShared() {
  const $count = useStore(count);

  return (
    <div className="rounded-lg bg-react-100 p-4 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold text-react-800">
        React Counter (Shared State)
      </h2>
      <div className="flex items-center justify-center gap-6 text-3xl font-semibold">
        <button
          onClick={decrement}
          className="rounded bg-react-500 px-4 py-2 text-white transition-colors hover:bg-react-600"
        >
          -
        </button>
        <p className="text-react-600">{$count}</p>
        <button
          onClick={increment}
          className="rounded bg-react-500 px-4 py-2 text-white transition-colors hover:bg-react-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

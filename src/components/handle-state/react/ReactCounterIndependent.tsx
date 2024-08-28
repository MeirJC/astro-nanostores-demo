import { useStore } from "@nanostores/react";
import {
  reactCount,
  reactIncrement,
  reactDecrement,
} from "@stores/handeling-state/independentCounterStore";

export function ReactCounterIndependent() {
  const $count = useStore(reactCount);

  return (
    <div className="rounded-lg bg-react-100 p-4 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold text-react-800">
        Independent React Counter
      </h2>
      <div className="flex items-center justify-center gap-6 text-3xl font-semibold">
        <button
          onClick={reactDecrement}
          className="rounded bg-react-500 px-4 py-2 text-white transition-colors hover:bg-react-600"
        >
          -
        </button>
        <p className="text-react-600">{$count}</p>
        <button
          onClick={reactIncrement}
          className="rounded bg-react-500 px-4 py-2 text-white transition-colors hover:bg-react-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

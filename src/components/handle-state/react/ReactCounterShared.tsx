import { useStore } from "@nanostores/react";
import { $count, increment, decrement } from "@stores/handling-state/sharedCounterStore";

export function ReactCounterShared() {
  const count = useStore($count);

  return (
    <div className="bg-react-100 rounded-lg p-4 shadow-md">
      <h2 className="text-react-800 mb-4 text-center text-2xl font-bold">
        React Counter (Shared State)
      </h2>
      <div className="flex items-center justify-center gap-6 text-3xl font-semibold">
        <button
          onClick={decrement}
          className="bg-react-500 hover:bg-react-600 rounded px-4 py-2 text-white transition-colors"
        >
          -
        </button>
        <p className="text-react-600">{count}</p>
        <button
          onClick={increment}
          className="bg-react-500 hover:bg-react-600 rounded px-4 py-2 text-white transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

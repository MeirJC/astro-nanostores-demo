import { decrementPersistent } from "@stores/handling-state/persistentCounterStore";

export default function ReactDecrement() {
  const decrement = () => {
    decrementPersistent();
  };

  return (
    <button
      onClick={decrement}
      className="border-react-500 hover:border-react-600 hover:bg-react-500/20 focus-visible:ring-react-300 flex size-10 items-center justify-center rounded-lg border-2 px-4 transition-colors focus-visible:ring-1 focus-visible:outline-hidden"
    >
      -
    </button>
  );
}

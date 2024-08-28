import { decrementPersistent } from "@stores/handeling-state/persistentConterStore";

export default function ReactDecrement() {
  const decrement = () => {
    decrementPersistent();
  };

  return (
    <button
      onClick={decrement}
      className="flex size-10 items-center justify-center rounded-lg border-2 border-react-500 px-4 transition-colors hover:border-react-600 hover:bg-react-500/20"
    >
      -
    </button>
  );
}

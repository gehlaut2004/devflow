import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      DevFlow
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Count: {count}
      </button>
    </div>
  );
}

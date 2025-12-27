export default function FocusTimer() {
  return (
    <div className="bg-white text-slate-200 rounded-xl p-6 max-w-md">
      <p className="text-sm text-slate-500 mb-2">Focus Session</p>
      <div className="text-5xl font-semibold text-slate-900 mb-6">25:00</div>
      <div className="flex gap-3">
        <button className="flex-1 bg-slate-900 text-white py-2 rounded-lg">
          Start
        </button>
        <button className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-lg border">
          Pause
        </button>
        <button className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-lg border">
          Reset
        </button>
      </div>
    </div>
  );
}

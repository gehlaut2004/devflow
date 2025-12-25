export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 px-6 py-8">
      <h1 className="text-xl font-semibold mb-8">Devflow</h1>
      <nav className="space-y-4 text-slate-600 ">
        <div className="font-medium text-slate-900">Dashboard</div>
        <div>Tasks</div>
        <div>Focus</div>
        <div>Activity</div>
      </nav>
    </aside>
  );
}

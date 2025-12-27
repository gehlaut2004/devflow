export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="text-2xl font-semibold mt-2 text-slate-900">{value}</h3>
      <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
    </div>
  );
}

export default function TaskCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4" >
      <h4 className="font-medium text-slate-900">
        {title}
      </h4>
      <p className="text-sm text-slate-500 mt-1">
        {description}
      </p>
    </div>
  )
}
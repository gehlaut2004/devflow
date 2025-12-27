import TaskCard from "./TaskCard";
export default function taskColumns({ title, tasks }) {
  return (
    <div className="bg-slate-100 rounded-xl p-4">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {tasks.map((task, index) => (  
          <TaskCard key={index} title={task.title} description={task.description} />))}
      </div>
    </div>
  )
  
}
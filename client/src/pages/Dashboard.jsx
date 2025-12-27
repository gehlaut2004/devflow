import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import TaskColumns from "../components/TaskColumns";
import FocusTimer from "../components/FocusTimer";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-slate-100">
          {/* Top Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Tasks Completed" value="12" subtitle="Today" />
            <StatCard
              title="Focus Sessions"
              value="4"
              subtitle="Pomodoro blocks"
            />
            <StatCard
              title="Time Focused"
              value="2h 30m"
              subtitle="Total today"
            />
            <StatCard
              title="Productivity Score"
              value="82%"
              subtitle="Based on activity"
            />
          </section>

          {/* Kanban / Task Columns Section */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TaskCard
              title="To-Do"
              tasks={[
                { id: 1, title: "Task 1", description: "Description 1" },
                { id: 2, title: "Task 2", description: "Description 2" },
                { id: 3, title: "Task 3", description: "Description 3" },
              ]}
            />

            <TaskColumns
              title="In Progress"
              tasks={[
                {
                  id: 4,
                  title: "Plan of the day",
                  description: "Define tasks and goals",
                },
                {
                  id: 5,
                  title: "Review Pull Requests",
                  description: "Check code submissions",
                },
              ]}
            />

            <TaskColumns
              title="Completed"
              tasks={[
                {
                  id: 6,
                  title: "Morning Routine",
                  description: "Exercise and meditation",
                },
                {
                  id: 7,
                  title: "Team Meeting",
                  description: "Discuss project updates",
                },
              ]}
            />
          </section>
          <section className="mt-8 flex justify-center">
            <FocusTimer />
          </section>
        </main>
      </div>
    </div>
  );
}

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-slate-100"></main>
      </div>
    </div>
  );
}

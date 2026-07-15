import DashboardLayout from "../layouts/DashboardLayout";
import { Users, CheckSquare, MessageCircle, Eye } from "lucide-react";

const cards = [
  {
    title: "Staff Online",
    value: "28",
    color: "from-emerald-900 via-emerald-600 to-lime-400",
    icon: <Users size={24} />,
  },
  {
    title: "Tasks Completed",
    value: "86",
    color: "from-sky-900 via-sky-600 to-cyan-400",
    icon: <CheckSquare size={24} />,
  },
  {
    title: "Complaints",
    value: "3",
    color: "from-rose-900 via-pink-600 to-fuchsia-400",
    icon: <MessageCircle size={24} />,
  },
  {
    title: "Inspections",
    value: "12",
    color: "from-violet-950 via-violet-600 to-indigo-500",
    icon: <Eye size={24} />,
  },
];

export default function SupervisorDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 shadow-xl shadow-black/20">
          <h2 className="text-white text-3xl font-semibold">
            Supervisor Dashboard
          </h2>
          <p className="mt-2 text-slate-400">
            Team task performance and quality review metrics for floor
            supervision.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

function Card({ title, value, color, icon }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${color} p-6 shadow-xl shadow-black/20`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
        {icon}
      </div>
      <p className="mt-5 text-slate-200">{title}</p>
      <h3 className="mt-4 text-3xl font-semibold text-white">{value}</h3>
    </div>
  );
}

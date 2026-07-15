import DashboardLayout from "../layouts/DashboardLayout";
import { Users, Clock, CalendarCheck, Briefcase } from "lucide-react";

const cards = [
  {
    title: "Employees",
    value: "40",
    color: "from-violet-950 via-violet-600 to-fuchsia-500",
    icon: <Users size={24} />,
  },
  {
    title: "Attendance Today",
    value: "36",
    color: "from-slate-900 via-slate-600 to-slate-400",
    icon: <Clock size={24} />,
  },
  {
    title: "Leave Requests",
    value: "8",
    color: "from-amber-900 via-orange-600 to-rose-500",
    icon: <CalendarCheck size={24} />,
  },
  {
    title: "Departments",
    value: "7",
    color: "from-emerald-900 via-lime-600 to-emerald-400",
    icon: <Briefcase size={24} />,
  },
];

export default function HrDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 shadow-xl shadow-black/20">
          <h2 className="text-white text-3xl font-semibold">HR Dashboard</h2>
          <p className="mt-2 text-slate-400">
            Team and workforce performance metrics for people operations.
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

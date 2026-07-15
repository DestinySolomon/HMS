import DashboardLayout from "../layouts/DashboardLayout";
import { TrendingUp, CalendarDays, CreditCard, Clock } from "lucide-react";

const cards = [
  {
    title: "Monthly Revenue",
    value: "₦8.5M",
    color: "from-sky-900 via-sky-600 to-indigo-700",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Bookings",
    value: "248",
    color: "from-emerald-900 via-emerald-600 to-lime-700",
    icon: <CalendarDays size={24} />,
  },
  {
    title: "Expenses",
    value: "₦1.2M",
    color: "from-rose-900 via-pink-600 to-orange-500",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Pending Approval",
    value: "14",
    color: "from-violet-950 via-fuchsia-700 to-rose-500",
    icon: <Clock size={24} />,
  },
];

export default function ManagerDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 shadow-xl shadow-black/20">
          <h2 className="text-white text-3xl font-semibold">
            Manager Dashboard
          </h2>
          <p className="mt-2 text-slate-400">
            Overview of bookings, revenue, approvals, and expense flow for
            operations management.
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

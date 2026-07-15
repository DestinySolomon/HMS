import DashboardLayout from "../layouts/DashboardLayout";
import { Sparkles, Wrench, Package, Bell } from "lucide-react";

const cards = [
  {
    title: "Rooms Cleaning",
    value: "15",
    color: "from-teal-950 via-teal-600 to-cyan-500",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Maintenance Issues",
    value: "4",
    color: "from-rose-900 via-rose-600 to-pink-500",
    icon: <Wrench size={24} />,
  },
  {
    title: "Laundry Orders",
    value: "32",
    color: "from-orange-900 via-orange-600 to-amber-400",
    icon: <Package size={24} />,
  },
  {
    title: "Inventory Alerts",
    value: "6",
    color: "from-slate-900 via-slate-600 to-slate-400",
    icon: <Bell size={24} />,
  },
];

export default function OperationsDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 shadow-xl shadow-black/20">
          <h2 className="text-white text-3xl font-semibold">
            Operations Dashboard
          </h2>
          <p className="mt-2 text-slate-400">
            Operational KPIs for housekeeping, maintenance, laundry, and supply
            chain visibility.
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

import DashboardLayout from "../layouts/DashboardLayout";
import {
  CheckCircle2,
  ArrowRightCircle,
  BedDouble,
  CalendarDays,
} from "lucide-react";

const cards = [
  {
    title: "Check-ins Today",
    value: "18",
    color: "from-cyan-900 via-cyan-600 to-blue-500",
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: "Check-outs",
    value: "12",
    color: "from-emerald-900 via-emerald-600 to-lime-400",
    icon: <ArrowRightCircle size={24} />,
  },
  {
    title: "Available Rooms",
    value: "23",
    color: "from-slate-900 via-slate-600 to-slate-400",
    icon: <BedDouble size={24} />,
  },
  {
    title: "Reservations",
    value: "42",
    color: "from-orange-900 via-orange-600 to-yellow-400",
    icon: <CalendarDays size={24} />,
  },
];

export default function ReceptionDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 shadow-xl shadow-black/20">
          <h2 className="text-white text-3xl font-semibold">
            Reception Dashboard
          </h2>
          <p className="mt-2 text-slate-400">
            Guest arrival and room readiness metrics for front desk oversight.
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

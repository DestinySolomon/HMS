import DashboardLayout from "../layouts/DashboardLayout";
import { DollarSign, CreditCard, TrendingUp, FileText } from "lucide-react";

const cards = [
  {
    title: "Income",
    value: "₦15M",
    color: "from-emerald-900 via-emerald-600 to-emerald-400",
    icon: <DollarSign size={24} />,
  },
  {
    title: "Expenses",
    value: "₦4M",
    color: "from-rose-900 via-orange-600 to-amber-400",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Profit",
    value: "₦11M",
    color: "from-slate-900 via-slate-600 to-slate-400",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Invoices",
    value: "350",
    color: "from-cyan-900 via-sky-600 to-indigo-500",
    icon: <FileText size={24} />,
  },
];

export default function AccountantDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101826] p-6 shadow-xl shadow-black/20">
          <h2 className="text-white text-3xl font-semibold">
            Accounting Dashboard
          </h2>
          <p className="mt-2 text-slate-400">
            Financial metrics for accounting, invoicing, and profitability
            review.
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

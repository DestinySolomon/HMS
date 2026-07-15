import DashboardLayout from "../layouts/DashboardLayout";
import { useHotel } from "../store/useHotel";
import {
  DollarSign,
  BedDouble,
  Users,
  TrendingUp,
  CalendarDays,
  Receipt,
  UserPlus,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200000 },
  { month: "Feb", revenue: 5300000 },
  { month: "Mar", revenue: 6100000 },
  { month: "Apr", revenue: 7200000 },
  { month: "May", revenue: 8500000 },
  { month: "Jun", revenue: 9800000 },
];

const roomData = [
  { name: "Occupied", value: 62, color: "#C8A45D" },
  { name: "Available", value: 18, color: "#4ADE80" },
  { name: "Maintenance", value: 5, color: "#60A5FA" },
];

export default function AdminDashboard() {
  const { activities } = useHotel();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-[#243041] bg-gradient-to-br from-[#101826] via-[#0f1724] to-[#162132] p-6 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-3 py-1 text-sm text-[#F5D88A]">
                <Sparkles size={14} />
                Executive overview
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Premium hotel operations at a glance
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
                Monitor occupancy, revenue, guest service, and finance in a
                refined dashboard built for a modern luxury property.
              </p>
            </div>
            <div className="rounded-2xl border border-[#243041] bg-[#0B1220] px-4 py-3 text-sm text-slate-300">
              <p className="font-medium text-white">Today's focus</p>
              <p className="mt-1 text-slate-400">
                Guest satisfaction and room readiness
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Card
            icon={<DollarSign />}
            title="Revenue Today"
            value="₦4.8M"
            color="from-[#1E3A8A] via-[#2563EB] to-[#7C3AED]"
            accent="text-[#A5B4FC]"
          />
          <Card
            icon={<BedDouble />}
            title="Occupied Rooms"
            value="62"
            color="from-[#15803D] via-[#22C55E] to-[#84CC16]"
            accent="text-[#BBF7D0]"
          />
          <Card
            icon={<Users />}
            title="Active Guests"
            value="145"
            color="from-[#B45309] via-[#F59E0B] to-[#F97316]"
            accent="text-[#FDE68A]"
          />
          <Card
            icon={<TrendingUp />}
            title="Monthly Growth"
            value="+18%"
            color="from-[#0F172A] via-[#0EA5E9] to-[#06B6D4]"
            accent="text-[#CFFAFE]"
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-[#243041] bg-[#101826] p-6 shadow-xl shadow-black/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Revenue performance
              </h3>
              <span className="rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-3 py-1 text-sm text-[#F5D88A]">
                +12% vs last month
              </span>
            </div>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis
                    dataKey="month"
                    stroke="#64748B"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis stroke="#64748B" tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#C8A45D"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#F5D88A" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-[#243041] bg-[#101826] p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold text-white">Room status</h3>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={roomData}
                    dataKey="value"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={3}
                  >
                    {roomData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              {roomData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl bg-[#0B1220] px-3 py-2"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.95fr]">
          <div className="rounded-3xl border border-[#243041] bg-[#101826] p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold text-white">
              Recent activities
            </h3>
            <div className="mt-5 space-y-3">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#243041] bg-[#0B1220] px-4 py-3 text-sm text-slate-300"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#243041] bg-[#101826] p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold text-white">Quick actions</h3>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Action icon={<UserPlus />} text="New Guest" />
              <Action icon={<CalendarDays />} text="Reservation" />
              <Action icon={<Receipt />} text="Receipt" />
              <Action icon={<ClipboardList />} text="Reports" />
            </div>
          </div>

          <div className="rounded-3xl border border-[#243041] bg-[#101826] p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold text-white">
              Financial snapshot
            </h3>
            <div className="mt-5 space-y-4">
              <Row label="Room Revenue" value="₦9.2M" />
              <Row label="Restaurant" value="₦2.4M" />
              <Row label="Laundry" value="₦700K" />
              <Row label="Expenses" value="-₦3.1M" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Card({ icon, title, value, color, accent }) {
  return (
    <div
      className={`rounded-3xl border border-[#243041] bg-gradient-to-br ${color} p-6 shadow-lg shadow-black/20`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ${accent}`}
      >
        {icon}
      </div>
      <p className="mt-4 text-sm text-slate-200">{title}</p>
      <h2 className="mt-2 text-3xl font-semibold text-white">{value}</h2>
    </div>
  );
}

function Action({ icon, text }) {
  return (
    <button className="flex flex-col items-center gap-2 rounded-2xl border border-[#243041] bg-[#0B1220] p-4 text-sm text-slate-300 transition hover:border-[#C8A45D]/40 hover:text-white">
      {icon}
      <span>{text}</span>
    </button>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#0B1220] px-4 py-3 text-sm text-slate-300">
      <span>{label}</span>
      <strong className="text-white">{value}</strong>
    </div>
  );
}

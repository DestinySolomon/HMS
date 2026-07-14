import DashboardLayout from "../layouts/DashboardLayout";

const stats = [
  { title: "Revenue", value: "₦12.8M", accent: "from-amber-500 to-yellow-400" },
  {
    title: "Occupied Rooms",
    value: "62",
    accent: "from-emerald-500 to-green-400",
  },
  { title: "Guests", value: "145", accent: "from-sky-500 to-cyan-400" },
  { title: "Employees", value: "40", accent: "from-fuchsia-500 to-purple-400" },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-gradient-to-br from-[#181C23] to-[#11141A] shadow-lg shadow-black/20"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${stat.accent}`} />
              <div className="p-6">
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                  {stat.title}
                </h3>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-2xl border border-[#2A2F38] bg-[#181C23] p-6 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Today’s Overview
              </h3>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">
                +12.4%
              </span>
            </div>
            <div className="mt-6 h-48 rounded-xl bg-gradient-to-br from-[#232834] to-[#11141A] p-4">
              <div className="flex h-full items-end gap-3">
                {[38, 52, 46, 68, 72, 64, 85].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-[#C8A45D] to-[#F7D98A]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#2A2F38] bg-[#181C23] p-6 shadow-lg shadow-black/20">
            <h3 className="text-lg font-semibold text-white">Service Status</h3>
            <div className="mt-4 space-y-3">
              {[
                { label: "Check-ins", value: "24", tone: "text-emerald-400" },
                {
                  label: "Pending Requests",
                  value: "8",
                  tone: "text-amber-400",
                },
                { label: "Maintenance", value: "3", tone: "text-sky-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl bg-[#11141A] px-4 py-3"
                >
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <span className={`text-sm font-semibold ${item.tone}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "../../layouts/DashboardLayout";
import { reservations } from "../../data/reservations";
import { CalendarDays, Search, Plus } from "lucide-react";

const statusStyles = {
  Confirmed: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  Pending: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
  Cancelled: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
  "Checked In": "bg-sky-500/10 text-sky-300 border border-sky-500/20"
};

export default function Reservations() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-white text-3xl font-bold">Reservations</h1>
            <p className="mt-2 text-gray-400">Manage guest bookings and monitor upcoming stays.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#C8A45D] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#D4B85A]">
              <Plus size={16} />
              New Reservation
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#2A2F38] bg-[#101317] px-5 py-3 text-sm text-slate-200 transition hover:border-slate-500">
              <CalendarDays size={16} />
              Calendar view
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#2A2F38] bg-[#101317] p-6 shadow-black/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Reservation ledger</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Current guest bookings</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative rounded-2xl bg-[#0B1220] p-3 text-slate-300">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="search"
                  placeholder="Search by guest, room or type"
                  className="w-full rounded-2xl bg-transparent pl-11 text-sm text-slate-200 outline-none placeholder:text-slate-500"
                />
              </div>
              <div className="rounded-2xl bg-[#0B1220] p-3 text-slate-300">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Upcoming</p>
                <p className="mt-1 text-lg font-semibold text-white">{reservations.length} bookings</p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-500">
                  <th className="py-4 pl-6 pr-4">Reservation</th>
                  <th className="py-4 px-4">Guest</th>
                  <th className="py-4 px-4">Room</th>
                  <th className="py-4 px-4">Type</th>
                  <th className="py-4 px-4">Stay</th>
                  <th className="py-4 px-4">Source</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {reservations.map((booking) => (
                  <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 pl-6 pr-4 text-slate-200">
                      <div className="font-semibold">{booking.id}</div>
                      <div className="text-xs text-slate-500">{booking.phone}</div>
                    </td>
                    <td className="py-5 px-4 text-slate-200">{booking.guest}</td>
                    <td className="py-5 px-4 text-slate-200">{booking.room}</td>
                    <td className="py-5 px-4 text-slate-200">{booking.type}</td>
                    <td className="py-5 px-4 text-slate-200">
                      {booking.arrival} - {booking.departure}
                      <div className="text-xs text-slate-500">{booking.nights} nights</div>
                    </td>
                    <td className="py-5 px-4 text-slate-200">{booking.source}</td>
                    <td className="py-5 px-6">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[booking.status] || "bg-slate-600/15 text-slate-200"}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

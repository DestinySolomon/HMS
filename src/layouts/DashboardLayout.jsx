import { useState } from "react";
import {
  LayoutDashboard,
  LogOut,
  Users,
  BedDouble,
  Menu,
  X,
} from "lucide-react";

import { useAuth } from "../context/useAuth";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed left-4 top-4 z-30 rounded-full border border-[#2A2F38] bg-[#101317] p-3 shadow-lg shadow-black/20 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <aside
          className={`fixed inset-y-0 left-0 z-20 w-72 border-r border-[#2A2F38] bg-[#101317] transition-transform duration-300 lg:static lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="border-b border-[#2A2F38] p-6">
            <h2 className="text-xl font-bold tracking-wide text-white">
              SUNTOS HOTEL
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Enterprise Management System
            </p>
          </div>

          <nav className="space-y-2 p-4">
            <button className="flex w-full items-center gap-3 rounded-lg bg-[#C8A45D]/15 p-3 text-left text-white">
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-gray-300 transition hover:bg-[#181C23] hover:text-white">
              <Users size={18} />
              Guests
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-gray-300 transition hover:bg-[#181C23] hover:text-white">
              <BedDouble size={18} />
              Rooms
            </button>
          </nav>

          <div className="border-t border-[#2A2F38] p-4 lg:mt-8">
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-red-400 transition hover:bg-red-500/10"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {isOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/60 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <main className="flex-1 p-4 pt-20 sm:p-6 lg:p-8 lg:pt-8">
          <div className="mb-8 rounded-2xl border border-[#2A2F38] bg-[#181C23]/80 p-6 shadow-lg shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Overview
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white">
              Welcome, {user?.name || "Admin"}
            </h1>
            <p className="mt-2 text-gray-400">
              {user?.role || "Administrator"}
            </p>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}

import { useState } from "react";
import { LogOut, Bell, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { navigation } from "../data/navigation";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menus = navigation[user?.role] || [];

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed left-4 top-4 z-30 rounded-full border border-[#243041] bg-[#101826] p-3 shadow-lg shadow-black/20 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <aside
          className={`fixed inset-y-0 left-0 z-20 flex w-72 flex-col border-r border-[#243041] bg-[#0F1724] transition-transform duration-300 lg:static lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="border-b border-[#243041] px-6 py-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C8A45D]">Enterprise Suite</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[0.2em] text-white">SUNTOS</h1>
            <p className="mt-1 text-sm text-slate-400">Hotel Management Platform</p>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto p-4">
            {menus.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#C8A45D] text-[#071018] shadow-lg shadow-[#C8A45D]/20"
                        : "text-slate-300 hover:bg-[#1B2533] hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="border-t border-[#243041] p-4">
            <button
              onClick={logout}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
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

        <div className="flex-1">
          <header className="border-b border-[#243041] bg-[#0B1220]/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#C8A45D]">Operations Overview</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Welcome back, {user?.name || "Admin"}
                </h2>
                <p className="text-sm text-slate-400">
                  {user?.role ? `${user.role} portal` : "Suntos Hotel Management System"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#243041] bg-[#101826] text-slate-300 transition hover:text-white">
                  <Bell size={18} />
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-[#243041] bg-[#101826] px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A45D] font-semibold text-[#071018]">
                    {user?.name?.charAt(0) || "A"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{user?.name || "Admin"}</p>
                    <p className="text-xs capitalize text-slate-400">{user?.role || "Administrator"}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

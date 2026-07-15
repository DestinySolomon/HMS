import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = login(username, password);

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    navigate(`/${user.role}`);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-[32px] border border-[#2A2F38] bg-[#181C23] p-10 shadow-2xl shadow-black/30">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#C8A45D] to-[#FBBF24] text-3xl font-black text-black">
            SH
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">SUNTOS HOTEL</h1>
            <p className="mt-2 text-sm text-gray-400">
              Enterprise Management System
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-[#2A2F38] bg-[#0B1220] p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">
              Login credentials
            </h2>
            <p className="text-sm text-slate-400">
              Use one of the sample accounts below.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-gray-300">
              <thead>
                <tr className="border-b border-[#2A2F38] text-xs uppercase tracking-[0.12em] text-slate-500">
                  <th className="py-3 pr-6">Role</th>
                  <th className="py-3 pr-6">Username</th>
                  <th className="py-3">Password</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2F38]">
                <tr className="bg-[#111620]">
                  <td className="py-4 pr-6 font-medium text-white">
                    CEO / Admin
                  </td>
                  <td className="py-4 pr-6">admin</td>
                  <td className="py-4">admin1</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">Manager</td>
                  <td className="py-4 pr-6">manager</td>
                  <td className="py-4">manager1</td>
                </tr>
                <tr className="bg-[#111620]">
                  <td className="py-4 pr-6 font-medium text-white">
                    Receptionist
                  </td>
                  <td className="py-4 pr-6">reception</td>
                  <td className="py-4">reception1</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">
                    HR Manager
                  </td>
                  <td className="py-4 pr-6">hr</td>
                  <td className="py-4">hr1</td>
                </tr>
                <tr className="bg-[#111620]">
                  <td className="py-4 pr-6 font-medium text-white">
                    Operations
                  </td>
                  <td className="py-4 pr-6">operations</td>
                  <td className="py-4">operations1</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">
                    Accountant
                  </td>
                  <td className="py-4 pr-6">accountant</td>
                  <td className="py-4">accountant1</td>
                </tr>
                <tr className="bg-[#111620]">
                  <td className="py-4 pr-6 font-medium text-white">
                    Supervisor
                  </td>
                  <td className="py-4 pr-6">supervisor</td>
                  <td className="py-4">supervisor1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-2xl border border-[#2A2F38] bg-[#101317] p-4 text-white outline-none transition focus:border-[#C8A45D]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-2xl border border-[#2A2F38] bg-[#101317] p-4 pr-14 text-white outline-none transition focus:border-[#C8A45D]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className="w-full rounded-2xl bg-[#C8A45D] px-5 py-4 text-black font-semibold transition hover:bg-[#D7B95F]">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

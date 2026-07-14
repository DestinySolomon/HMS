import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

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
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center">
      <div className="w-full max-w-md bg-[#181C23] p-10 rounded-2xl border border-[#2A2F38]">
        <h1 className="text-3xl text-white font-bold mb-2">SUNTOS HOTEL</h1>

        <p className="text-gray-400 mb-8">Enterprise Management System</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-[#101317] border border-[#2A2F38] p-3 rounded-lg text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#101317] border border-[#2A2F38] p-3 rounded-lg text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-[#C8A45D] text-black p-3 rounded-lg font-semibold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

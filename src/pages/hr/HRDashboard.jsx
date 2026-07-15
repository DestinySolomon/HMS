import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import { Users, UserCheck, UserMinus } from "lucide-react";

import { employees } from "../../data/employees";

export default function HRDashboard() {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const leave = employees.filter(
    (employee) => employee.status === "On Leave",
  ).length;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
text-white
text-3xl
font-bold
"
          >
            HR Dashboard
          </h1>

          <p className="text-gray-400">
            Manage employees and workforce information
          </p>
        </div>

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-6
"
        >
          <StatCard
            title="Total Employees"
            value={totalEmployees}
            icon={<Users />}
          />

          <StatCard
            title="Active Staff"
            value={activeEmployees}
            icon={<UserCheck />}
          />

          <StatCard title="On Leave" value={leave} icon={<UserMinus />} />
        </div>
      </div>
    </DashboardLayout>
  );
}

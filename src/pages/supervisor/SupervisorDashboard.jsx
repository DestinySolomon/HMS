import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import { BedDouble, ClipboardCheck, AlertTriangle, Users } from "lucide-react";

import { supervisorTasks, supervisorAlerts } from "../../data/supervisor";

export default function SupervisorDashboard() {
  const pendingTasks = supervisorTasks.filter(
    (task) => task.status !== "Completed",
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
            Supervisor Dashboard
          </h1>

          <p className="text-gray-400">Daily hotel operations monitoring</p>
        </div>

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-6
"
        >
          <StatCard title="Room Ready" value="85" icon={<BedDouble />} />

          <StatCard
            title="Pending Tasks"
            value={pendingTasks}
            icon={<ClipboardCheck />}
          />

          <StatCard
            title="Alerts"
            value={supervisorAlerts.length}
            icon={<AlertTriangle />}
          />

          <StatCard title="Staff Active" value="42" icon={<Users />} />
        </div>
      </div>
    </DashboardLayout>
  );
}

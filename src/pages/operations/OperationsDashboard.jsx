import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import { Package, Shirt, Utensils, AlertTriangle } from "lucide-react";

export default function OperationsDashboard() {
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
            Operations Dashboard
          </h1>

          <p className="text-gray-400">Monitor hotel daily operations</p>
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
          <StatCard title="Inventory Items" value="245" icon={<Package />} />

          <StatCard title="Laundry Orders" value="32" icon={<Shirt />} />

          <StatCard title="Restaurant Orders" value="86" icon={<Utensils />} />

          <StatCard title="Alerts" value="5" icon={<AlertTriangle />} />
        </div>
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import { Package, AlertTriangle, Boxes } from "lucide-react";

import { inventory } from "../../data/inventory";

export default function Inventory() {
  const totalItems = inventory.length;

  const lowStock = inventory.filter(
    (item) => item.status === "Low Stock",
  ).length;

  const outOfStock = inventory.filter(
    (item) => item.status === "Out of Stock",
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
            Inventory Management
          </h1>

          <p className="text-gray-400">
            Monitor hotel supplies and stock levels
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
          <StatCard title="Products" value={totalItems} icon={<Boxes />} />

          <StatCard
            title="Low Stock"
            value={lowStock}
            icon={<AlertTriangle />}
          />

          <StatCard
            title="Out Of Stock"
            value={outOfStock}
            icon={<Package />}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import { stockMovements } from "../../data/stockMovement";

export default function StockMovement() {
  const columns = [
    {
      key: "id",
      label: "Movement ID",
    },

    {
      key: "item",
      label: "Item",
    },

    {
      key: "type",
      label: "Movement",
    },

    {
      key: "quantity",
      label: "Quantity",
    },

    {
      key: "date",
      label: "Date",
    },

    {
      key: "user",
      label: "Recorded By",
    },
  ];

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
            Stock Movement
          </h1>

          <p className="text-gray-400">Track inventory changes</p>
        </div>

        <DataTable columns={columns} data={stockMovements} />
      </div>
    </DashboardLayout>
  );
}

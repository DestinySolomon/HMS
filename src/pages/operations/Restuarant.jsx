import { useState } from "react";

import OrderStatusUpdate from "../../components/forms/OrderStatusUpdate";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import { restaurantOrders } from "../../data/restuarant";

export default function Restaurant() {
  const [orders, setOrders] = useState(restaurantOrders);

  function updateStatus(id, status) {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
            }
          : order,
      ),
    );
  }

  const columns = [
    {
      key: "id",
      label: "Order ID",
    },

    {
      key: "guest",
      label: "Guest",
    },

    {
      key: "room",
      label: "Room",
    },

    {
      key: "items",
      label: "Order",
    },

    {
      key: "amount",
      label: "Amount",
    },

    {
      key: "status",
      label: "Status",
    },

    {
      key: "date",
      label: "Date",
    },
    {
      key: "action",
      label: "Action",
    },
  ];

  const data = orders.map((order) => ({
    ...order,

    amount: `₦${order.amount.toLocaleString()}`,

    status: <StatusBadge status={order.status} />,

    action: <OrderStatusUpdate order={order} updateStatus={updateStatus} />,
  }));

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div
          className="
flex
justify-between
items-center
"
        >
          <div>
            <h1
              className="
text-white
text-3xl
font-bold
"
            >
              Restaurant Orders
            </h1>

            <p className="text-gray-400">
              Manage guest food and beverage orders
            </p>
          </div>

          <button
            className="
bg-[#C8A45D]
text-black
px-5
py-3
rounded-lg
font-semibold
"
          >
            New Order
          </button>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </DashboardLayout>
  );
}

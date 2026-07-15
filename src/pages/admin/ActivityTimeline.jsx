import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import { activityTimeline } from "../../data/activityTimeline";

export default function ActivityTimeline() {
  const columns = [
    {
      key: "department",
      label: "Department",
    },

    {
      key: "activity",
      label: "Activity",
    },

    {
      key: "user",
      label: "Performed By",
    },

    {
      key: "time",
      label: "Time",
    },

    {
      key: "status",
      label: "Status",
    },
  ];

  const data = activityTimeline.map((item) => ({
    ...item,

    status: <StatusBadge status={item.status} />,
  }));

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
            Hotel Activity Timeline
          </h1>

          <p className="text-gray-400">
            Monitor activities happening across departments
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
          <button
            className="
bg-[#C8A45D]
text-black
rounded-xl
py-4
font-semibold
"
          >
            Generate Report
          </button>

          <button
            className="
bg-[#181C23]
border
border-[#2A2F38]
text-white
rounded-xl
py-4
"
          >
            View Analytics
          </button>

          <button
            className="
bg-[#181C23]
border
border-[#2A2F38]
text-white
rounded-xl
py-4
"
          >
            Export Data
          </button>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </DashboardLayout>
  );
}

import DashboardLayout from "../layouts/DashboardLayout";

export default function ManagerDashboard() {
  return (
    <DashboardLayout>
      <h2 className="text-white text-3xl font-bold">
        Manager Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-6 mt-8">

        {[
          ["Monthly Revenue","₦8.5M"],
          ["Bookings","248"],
          ["Expenses","₦1.2M"],
          ["Pending Approval","14"]
        ].map(([title,value]) => (
          <div 
            key={title}
            className="bg-[#181C23] p-6 rounded-xl"
          >
            <p className="text-gray-400">
              {title}
            </p>

            <h3 className="text-white text-3xl font-bold mt-3">
              {value}
            </h3>
          </div>
        ))}

      </div>

    </DashboardLayout>
  );
}
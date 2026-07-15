import AnalyticsCharts from "../../components/charts/AnalyticsCharts";

import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import { DollarSign, BedDouble, TrendingUp, Users } from "lucide-react";

import {
  revenueData,
  occupancyData,
  departmentPerformance,
} from "../../data/reports";

export default function ReportsDashboard() {
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);

  const averageOccupancy = Math.round(
    occupancyData.reduce((sum, item) => sum + item.occupancy, 0) /
      occupancyData.length,
  );

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
            Reports & Analytics
          </h1>

          <p className="text-gray-400">Hotel performance overview</p>
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
          <StatCard
            title="Total Revenue"
            value={`₦${totalRevenue.toLocaleString()}`}
            icon={<DollarSign />}
          />

          <StatCard
            title="Average Occupancy"
            value={`${averageOccupancy}%`}
            icon={<BedDouble />}
          />

          <StatCard
            title="Departments"
            value={departmentPerformance.length}
            icon={<Users />}
          />

          <StatCard title="Growth" value="+18%" icon={<TrendingUp />} />
        </div>
      </div>

      <AnalyticsCharts />
    </DashboardLayout>
  );
}

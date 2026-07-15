import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import { BedDouble, DoorOpen, Users } from "lucide-react";

import {
  roomOccupancy,
  occupancyTrend,
  roomStatus,
} from "../../data/occupancy";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function OccupancyReport() {
  const percentage = Math.round(
    (roomOccupancy.occupiedRooms / roomOccupancy.totalRooms) * 100,
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
            Occupancy Report
          </h1>

          <p className="text-gray-400">Hotel room utilization analysis</p>
        </div>

        <div
          className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
"
        >
          <StatCard
            title="Total Rooms"
            value={roomOccupancy.totalRooms}
            icon={<BedDouble />}
          />

          <StatCard
            title="Occupied Rooms"
            value={roomOccupancy.occupiedRooms}
            icon={<Users />}
          />

          <StatCard
            title="Available Rooms"
            value={roomOccupancy.availableRooms}
            icon={<DoorOpen />}
          />

          <StatCard
            title="Occupancy Rate"
            value={`${percentage}%`}
            icon={<BedDouble />}
          />
        </div>

        <div
          className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
"
        >
          <h2
            className="
text-white
font-bold
mb-5
"
          >
            Occupancy Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyTrend}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line type="monotone" dataKey="occupancy" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
"
        >
          <h2
            className="
text-white
font-bold
mb-5
"
          >
            Room Status
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roomStatus}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="status" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}

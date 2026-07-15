import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/ui/StatCard";

import {
    executiveStats,
    executiveActivities
} from "../../data/executive";

import AnalyticsCharts from "../../components/charts/AnalyticsCharts";

import {
    DollarSign,
    BedDouble,
    ClipboardCheck,
    AlertTriangle,
    Hotel,
    Users
} from "lucide-react";

export default function ExecutiveDashboard() {

    return (

        <DashboardLayout>

            <div className="space-y-8">

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-3xl font-bold text-white">

                            Executive Command Center

                        </h1>

                        <p className="text-gray-400">

                            Welcome back. Here's what's happening across Suntos Hotel today.

                        </p>

                    </div>

                </div>


                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

                    <StatCard
                        title="Today's Revenue"
                        value={`₦${executiveStats.revenueToday.toLocaleString()}`}
                        icon={<DollarSign />}
                    />

                    <StatCard
                        title="Occupancy"
                        value={`${executiveStats.occupancy}%`}
                        icon={<BedDouble />}
                    />

                    <StatCard
                        title="Guests"
                        value={executiveStats.activeGuests}
                        icon={<Users />}
                    />

                    <StatCard
                        title="Pending"
                        value={executiveStats.pendingApprovals}
                        icon={<ClipboardCheck />}
                    />

                    <StatCard
                        title="Alerts"
                        value={executiveStats.alerts}
                        icon={<AlertTriangle />}
                    />

                    <StatCard
                        title="Hotel Health"
                        value={`${executiveStats.hotelHealth}%`}
                        icon={<Hotel />}
                    />

                </div>


                <AnalyticsCharts />


                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    <div className="xl:col-span-2 bg-[#181C23] border border-[#2A2F38] rounded-xl p-6">

                        <h2 className="text-white text-xl font-semibold mb-6">

                            Live Activity

                        </h2>

                        <div className="space-y-5">

                            {executiveActivities.map((activity,index)=>(

                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-[#2A2F38] pb-4"
                                >

                                    <div>

                                        <p className="text-white">

                                            {activity.activity}

                                        </p>

                                    </div>

                                    <span className="text-gray-500">

                                        {activity.time}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                    <div className="bg-[#181C23] border border-[#2A2F38] rounded-xl p-6">

                        <h2 className="text-white text-xl font-semibold mb-6">

                            Hotel Health

                        </h2>

                        <div className="flex flex-col items-center justify-center py-8">

                            <div className="text-6xl font-bold text-[#C8A45D]">

                                {executiveStats.hotelHealth}%

                            </div>

                            <p className="text-green-400 mt-4">

                                Excellent Performance

                            </p>

                            <p className="text-gray-400 mt-2 text-center">

                                Operations are stable across all departments.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}
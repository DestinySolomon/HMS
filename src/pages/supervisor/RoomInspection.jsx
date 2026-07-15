import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import DataTable from "../../components/tables/DataTable";
import StatusBadge from "../../components/ui/StatusBadge";

import { roomInspection } from "../../data/roomInspection";

export default function RoomInspection() {

    const [rooms, setRooms] = useState(roomInspection);

    function updateStatus(id, status) {

        setRooms(prev =>
            prev.map(room =>
                room.id === id
                    ? {
                        ...room,
                        status,
                        lastInspection: new Date().toLocaleString()
                    }
                    : room
            )
        );

    }

    const columns = [

        {
            key: "room",
            label: "Room"
        },

        {
            key: "floor",
            label: "Floor"
        },

        {
            key: "housekeeper",
            label: "Housekeeper"
        },

        {
            key: "inspectedBy",
            label: "Supervisor"
        },

        {
            key: "status",
            label: "Condition"
        },

        {
            key: "lastInspection",
            label: "Last Inspection"
        },

        {
            key: "action",
            label: "Update"
        }

    ];

    const data = rooms.map(room => ({

        ...room,

        status: (
            <StatusBadge status={room.status} />
        ),

        action: (

            <select

                value={room.status}

                onChange={(e)=>updateStatus(room.id,e.target.value)}

                className="
                bg-[#101317]
                text-white
                border
                border-[#2A2F38]
                rounded-lg
                px-3
                py-2
                "

            >

                <option>Ready</option>

                <option>Needs Cleaning</option>

                <option>Maintenance Required</option>

            </select>

        )

    }));


    return (

        <DashboardLayout>

            <div className="space-y-8">

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-3xl font-bold text-white">

                            Room Inspection

                        </h1>

                        <p className="text-gray-400">

                            Monitor room readiness before guest occupancy

                        </p>

                    </div>

                </div>

                <DataTable

                    columns={columns}

                    data={data}

                />

            </div>

        </DashboardLayout>

    );

}
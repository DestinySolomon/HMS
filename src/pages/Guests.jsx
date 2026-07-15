import DashboardLayout from "../layouts/DashboardLayout";

import DataTable from "../components/tables/DataTable";

import {
    getGuests
} from "../services/guestService";

export default function Guests(){

    const guests = getGuests();

    const columns = [

        {
            key:"name",
            label:"Guest"
        },

        {
            key:"phone",
            label:"Phone"
        },

        {
            key:"email",
            label:"Email"
        },

        {
            key:"room",
            label:"Room"
        },

        {
            key:"status",
            label:"Status"
        }

    ];

    return (

        <DashboardLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-3xl text-white font-bold">
                        Guests
                    </h1>

                    <p className="text-gray-400">
                        Guest Management
                    </p>

                </div>

                <DataTable

                    columns={columns}

                    data={guests}

                />

            </div>

        </DashboardLayout>

    );

}
import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import {
    approvalRequests
} from "../../data/approvals";


export default function Approvals(){

    const [requests,setRequests] = useState(
        approvalRequests
    );


    function updateStatus(id,status){

        setRequests(prev =>

            prev.map(request =>

                request.id === id

                ?

                {
                    ...request,
                    status
                }

                :

                request

            )

        );

    }



    const columns = [

        {
            key:"id",
            label:"Request ID"
        },

        {
            key:"type",
            label:"Type"
        },

        {
            key:"department",
            label:"Department"
        },

        {
            key:"requestedBy",
            label:"Requested By"
        },

        {
            key:"amount",
            label:"Amount"
        },

        {
            key:"status",
            label:"Status"
        },

        {
            key:"action",
            label:"Action"
        }

    ];



    const data = requests.map(request => ({

        ...request,


        amount:
        `₦${request.amount.toLocaleString()}`,



        status:

        (
            <StatusBadge

                status={request.status}

            />
        ),



        action:

        (
            <select

                value={request.status}

                onChange={(e)=>
                    updateStatus(
                        request.id,
                        e.target.value
                    )
                }

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

                <option>
                    Pending
                </option>

                <option>
                    Approved
                </option>

                <option>
                    Rejected
                </option>

            </select>
        )

    }));



    return (

        <DashboardLayout>


            <div className="space-y-8">


                <div>

                    <h1 className="
                    text-white
                    text-3xl
                    font-bold
                    ">

                        Executive Approvals

                    </h1>


                    <p className="text-gray-400">

                        Review and approve hotel requests

                    </p>

                </div>



                <DataTable

                    columns={columns}

                    data={data}

                />


            </div>


        </DashboardLayout>

    );

}
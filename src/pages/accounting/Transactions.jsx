import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import {
    transactions
} from "../../data/accounting";


export default function Transactions(){

    const [filter,setFilter] = useState("All");


    const filteredTransactions =

        filter === "All"

        ?

        transactions

        :

        transactions.filter(
            item=>item.type===filter
        );



    const columns=[

        {
            key:"id",
            label:"Transaction ID"
        },

        {
            key:"type",
            label:"Type"
        },

        {
            key:"category",
            label:"Category"
        },

        {
            key:"description",
            label:"Description"
        },

        {
            key:"amount",
            label:"Amount"
        },

        {
            key:"method",
            label:"Payment Method"
        },

        {
            key:"date",
            label:"Date"
        }

    ];



    const formattedData = filteredTransactions.map(item=>({

        ...item,

        amount:
        `₦${item.amount.toLocaleString()}`

    }));



    return (

        <DashboardLayout>


            <div className="space-y-8">


                <div className="
                flex
                justify-between
                items-center
                ">


                    <div>

                        <h1 className="
                        text-white
                        text-3xl
                        font-bold
                        ">
                            Transactions
                        </h1>


                        <p className="text-gray-400">
                            Complete financial activity history
                        </p>

                    </div>




                    <select

                    value={filter}

                    onChange={
                        e=>setFilter(e.target.value)
                    }

                    className="
                    bg-[#181C23]
                    border
                    border-[#2A2F38]
                    rounded-lg
                    text-white
                    p-3
                    "

                    >

                        <option>
                            All
                        </option>

                        <option>
                            Income
                        </option>


                        <option>
                            Expense
                        </option>


                    </select>



                </div>





                <DataTable

                    columns={columns}

                    data={formattedData}

                />



            </div>


        </DashboardLayout>

    );

}
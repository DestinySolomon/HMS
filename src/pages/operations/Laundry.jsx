import { useState } from "react";

import LaundryStatusUpdate from "../../components/forms/LaundryStatusUpdate";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";


import {
    laundryOrders
} from "../../data/laundry";


export default function Laundry(){

    const [orders,setOrders] = useState(laundryOrders);



function updateStatus(id,status){

    setOrders(prev=>

        prev.map(order=>

            order.id===id

            ?

            {
                ...order,
                status
            }

            :

            order

        )

    );

}


const columns=[

{
key:"id",
label:"Order ID"
},

{
key:"guest",
label:"Guest"
},

{
key:"room",
label:"Room"
},

{
key:"items",
label:"Items"
},

{
key:"service",
label:"Service"
},

{
key:"status",
label:"Status"
},

{
key:"date",
label:"Date"
},
{
key:"action",
label:"Action"
}

];



const data = orders.map(order=>({

...order,


status:(

<StatusBadge

status={order.status}

/>

),



action:(

<LaundryStatusUpdate

order={order}

updateStatus={updateStatus}

/>

)

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

Laundry Management

</h1>


<p className="text-gray-400">

Track guest laundry services

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

New Laundry Order

</button>



</div>




<DataTable

columns={columns}

data={data}

/>



</div>


</DashboardLayout>

);

}
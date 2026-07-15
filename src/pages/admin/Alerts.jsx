import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import {
    executiveAlerts
} from "../../data/alerts";



export default function Alerts(){


const [alerts,setAlerts] = useState(
    executiveAlerts
);



function updateStatus(id,status){

    setAlerts(prev=>

        prev.map(alert=>

            alert.id===id

            ?

            {
                ...alert,
                status
            }

            :

            alert

        )

    );

}



const columns=[

{
key:"id",
label:"Alert ID"
},

{
key:"title",
label:"Alert"
},

{
key:"department",
label:"Department"
},

{
key:"priority",
label:"Priority"
},

{
key:"status",
label:"Status"
},

{
key:"time",
label:"Time"
},

{
key:"action",
label:"Action"
}

];



const data = alerts.map(alert=>({

...alert,


priority:(

<StatusBadge

status={alert.priority}

/>

),


status:(

<StatusBadge

status={alert.status}

/>

),


action:(

<select

value={alert.status}

onChange={
e=>

updateStatus(
alert.id,
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
New
</option>

<option>
Under Review
</option>

<option>
Resolved
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

Executive Alerts

</h1>


<p className="text-gray-400">

Monitor critical hotel activities

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
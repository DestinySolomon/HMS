import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";


import {
    attendance
} from "../../data/attendance";



export default function Attendance(){


const columns=[

{
key:"id",
label:"Attendance ID"
},

{
key:"employee",
label:"Employee"
},

{
key:"department",
label:"Department"
},

{
key:"date",
label:"Date"
},

{
key:"checkIn",
label:"Check In"
},

{
key:"checkOut",
label:"Check Out"
},

{
key:"status",
label:"Status"
}

];



const data = attendance.map(item=>({

...item,

status:(

<StatusBadge

status={item.status}

/>

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

Attendance

</h1>


<p className="text-gray-400">

Monitor employee attendance records

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
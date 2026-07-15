import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";


import {
    payroll
} from "../../data/payroll";



export default function Payroll(){


const columns=[

{
key:"id",
label:"Payroll ID"
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
key:"salary",
label:"Salary"
},

{
key:"month",
label:"Month"
},

{
key:"status",
label:"Status"
}

];



const data = payroll.map(item=>({

...item,

salary:`₦${item.salary.toLocaleString()}`,

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

Payroll

</h1>


<p className="text-gray-400">

Manage employee salary records

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
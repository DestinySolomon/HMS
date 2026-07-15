import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";


import {
    employees
} from "../../data/employees";


export default function Employees(){


const columns=[

{
key:"id",
label:"Employee ID"
},

{
key:"name",
label:"Name"
},

{
key:"department",
label:"Department"
},

{
key:"position",
label:"Position"
},

{
key:"phone",
label:"Phone"
},

{
key:"status",
label:"Status"
}

];



const data = employees.map(employee=>({

...employee,


status:(

<StatusBadge

status={employee.status}

/>

)

}));



return (

<DashboardLayout>


<div className="space-y-8">


<div
className="
flex
justify-between
items-center
"
>


<div>

<h1 className="
text-white
text-3xl
font-bold
">

Employees

</h1>


<p className="text-gray-400">

Manage hotel workforce

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

Add Employee

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
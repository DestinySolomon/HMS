import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";


import {
    departmentReport
} from "../../data/departmentReport";


import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer

} from "recharts";



export default function DepartmentReport(){



const columns=[

{
key:"department",
label:"Department"
},

{
key:"revenue",
label:"Revenue"
},

{
key:"transactions",
label:"Transactions"
},

{
key:"performance",
label:"Performance"
},

{
key:"status",
label:"Status"
}

];



const data = departmentReport.map(item=>({

...item,


revenue:`₦${item.revenue.toLocaleString()}`,

performance:`${item.performance}%`,


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

Department Performance

</h1>


<p className="text-gray-400">

Compare hotel department efficiency

</p>


</div>





<div className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
">


<h2 className="
text-white
font-bold
mb-5
">

Revenue Comparison

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

data={departmentReport}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis

dataKey="department"

/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="revenue"

/>


</BarChart>


</ResponsiveContainer>


</div>





<DataTable

columns={columns}

data={data}

/>



</div>


</DashboardLayout>

);

}
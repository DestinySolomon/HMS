import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import {
    revenueRecords
} from "../../data/revenue";


export default function RevenueReport(){


const totalRevenue = revenueRecords.reduce(

(total,item)=>total + item.amount,

0

);



const columns=[

{
key:"id",
label:"Transaction ID"
},

{
key:"source",
label:"Revenue Source"
},

{
key:"guest",
label:"Guest"
},

{
key:"paymentMethod",
label:"Payment Method"
},

{
key:"amount",
label:"Amount"
},

{
key:"date",
label:"Date"
}

];



const data = revenueRecords.map(item=>({

...item,

amount:`₦${item.amount.toLocaleString()}`

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

Revenue Report

</h1>


<p className="text-gray-400">

Detailed hotel income records

</p>


</div>




<div className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
">


<p className="text-gray-400">

Total Revenue

</p>


<h2 className="
text-white
text-3xl
font-bold
">

₦{totalRevenue.toLocaleString()}

</h2>


</div>




<DataTable

columns={columns}

data={data}

/>



</div>


</DashboardLayout>

);

}
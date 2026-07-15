import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import {
    inventory
} from "../../data/inventory";


export default function LowStock(){


const lowStockItems = inventory.filter(

item =>

item.status === "Low Stock" ||

item.status === "Out of Stock"

);



const columns=[

{
key:"name",
label:"Item"
},

{
key:"category",
label:"Category"
},

{
key:"quantity",
label:"Available Quantity"
},

{
key:"unit",
label:"Unit"
},

{
key:"status",
label:"Status"
}

];



const data = lowStockItems.map(item=>({

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

Low Stock Alerts

</h1>


<p className="text-gray-400">

Items requiring restocking

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
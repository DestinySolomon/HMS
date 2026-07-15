import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import {
    receipts
} from "../../data/receipts";


import {
    Printer
} from "lucide-react";



export default function Receipts(){


const printReceipt = (receipt)=>{

    alert(
        `Printing receipt ${receipt.id}`
    );

};



const columns=[

{
key:"id",
label:"Receipt No."
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
key:"amount",
label:"Amount"
},

{
key:"method",
label:"Payment"
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



const data = receipts.map(item=>({

...item,

amount:`₦${item.amount.toLocaleString()}`,

action:(

<button

onClick={()=>printReceipt(item)}

className="
flex
items-center
gap-2
bg-[#C8A45D]
text-black
px-3
py-2
rounded-lg
text-sm
"

>

<Printer size={15}/>

Print

</button>

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

Receipts

</h1>


<p className="text-gray-400">

View and print guest payment receipts

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
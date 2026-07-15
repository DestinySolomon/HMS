import { useState } from "react";

import AddProductModal from "../../components/modals/AddProductModal";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import {
    inventory
} from "../../data/inventory";



export default function InventoryList(){
    const [showModal,setShowModal] = useState(false);


const [items,setItems] = useState(inventory);



function addProduct(product){

    setItems(prev=>[
        ...prev,
        product
    ]);

}


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
label:"Quantity"
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


const data = items.map(item=>({

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

Inventory Items

</h1>


<p className="text-gray-400">

Manage hotel supplies

</p>


</div>


<button

onClick={()=>setShowModal(true)}

className="
bg-[#C8A45D]
text-black
px-5
py-3
rounded-lg
font-semibold
"

>

Add Product

</button>



</div>




<DataTable

columns={columns}

data={data}

/>


{
showModal &&

<AddProductModal

closeModal={()=>setShowModal(false)}

saveProduct={addProduct}

/>

}
</div>


</DashboardLayout>

);

}
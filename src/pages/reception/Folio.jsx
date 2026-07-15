import {
useState
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";


export default function Folio(){

const [charges,setCharges]=useState([
{
item:"Executive Room",
amount:150000
},
{
item:"Restaurant",
amount:35000
},
{
item:"Laundry",
amount:10000
}
]);


const total =
charges.reduce(
(sum,item)=>sum+item.amount,
0
);



return (

<DashboardLayout>


<div className="space-y-8">


<div>

<h1 className="
text-white
text-3xl
font-bold
">
Guest Folio
</h1>

<p className="text-gray-400">
Michael Johnson - Room 101
</p>

</div>




<div className="
grid
grid-cols-3
gap-6
">



<div className="
col-span-2
bg-[#181C23]
rounded-xl
p-6
">

<h2 className="
text-white
text-xl
font-semibold
mb-6
">
Charges
</h2>



{
charges.map((charge,index)=>(

<div

key={index}

className="
flex
justify-between
border-b
border-[#2A2F38]
py-4
text-gray-300
"

>

<span>
{charge.item}
</span>


<span className="text-white">

₦{charge.amount.toLocaleString()}

</span>


</div>

))

}



<div className="
flex
justify-between
mt-6
text-xl
text-white
font-bold
">

<span>
Total
</span>

<span>
₦{total.toLocaleString()}
</span>

</div>


</div>






<div
className="
bg-[#181C23]
rounded-xl
p-6
"
>


<h2 className="
text-white
font-semibold
mb-6
">
Payment
</h2>


<select
className="
w-full
bg-[#101317]
border
border-[#2A2F38]
rounded-lg
p-3
text-white
"
>

<option>
Cash
</option>

<option>
Card
</option>

<option>
Transfer
</option>

</select>




<button

className="
mt-6
w-full
bg-[#C8A45D]
text-black
py-3
rounded-lg
font-semibold
"

>

Generate Receipt

</button>


</div>



</div>



</div>


</DashboardLayout>

)

}
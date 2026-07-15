import DashboardLayout from "../../layouts/DashboardLayout";


export default function Receipt(){


return (

<DashboardLayout>


<div
className="
max-w-xl
bg-white
text-black
p-8
rounded-xl
"
id="receipt"
>


<div className="text-center">

<h1 className="text-2xl font-bold">
SUNTOS HOTEL
</h1>

<p>
Luxury Hospitality
</p>

</div>



<hr className="my-6"/>



<div className="space-y-3">


<p>
Receipt No:
<strong>
REC-00127
</strong>
</p>


<p>
Guest:
<strong>
Michael Johnson
</strong>
</p>


<p>
Room:
<strong>
101
</strong>
</p>


<p>
Payment:
<strong>
Transfer
</strong>
</p>


<p>
Date:
<strong>
14 July 2026
</strong>
</p>


</div>



<hr className="my-6"/>



<div className="
flex
justify-between
text-xl
font-bold
">

<span>
TOTAL
</span>


<span>
₦195,000
</span>


</div>



<button

onClick={()=>window.print()}

className="
mt-8
bg-black
text-white
px-6
py-3
rounded-lg
"

>

Print Receipt

</button>


</div>


</DashboardLayout>

)

}
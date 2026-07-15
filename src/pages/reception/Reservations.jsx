import DashboardLayout from "../../layouts/DashboardLayout";

import {
reservations
} from "../../data/reservations";

import {
CalendarDays
} from "lucide-react";


export default function Reservations(){


return (

<DashboardLayout>


<div className="space-y-8">


<div className="flex justify-between">


<div>

<h1 className="
text-white
text-3xl
font-bold
">
Reservations
</h1>


<p className="text-gray-400">
Manage guest bookings
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

+ New Reservation

</button>


</div>





<div className="
grid
grid-cols-3
gap-6
">


{
reservations.map(item=>(

<div

key={item.id}

className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
"

>


<div className="
flex
justify-between
">

<CalendarDays
className="text-[#C8A45D]"
/>


<span className="
text-green-400
"
>

{item.status}

</span>


</div>



<h2 className="
text-white
text-xl
font-bold
mt-5
">

{item.guest}

</h2>



<div className="
mt-4
space-y-2
text-gray-400
">


<p>
Room:
<span className="text-white ml-2">
{item.room}
</span>
</p>


<p>
Type:
<span className="text-white ml-2">
{item.type}
</span>
</p>


<p>
Arrival:
<span className="text-white ml-2">
{item.arrival}
</span>
</p>


<p>
Departure:
<span className="text-white ml-2">
{item.departure}
</span>
</p>


</div>



<button

className="
mt-6
w-full
bg-[#101317]
text-white
py-3
rounded-lg
hover:bg-[#222831]
"

>

View Reservation

</button>



</div>


))

}



</div>



</div>


</DashboardLayout>

)

}
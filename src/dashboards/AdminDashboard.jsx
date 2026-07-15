import DashboardLayout from "../layouts/DashboardLayout";
import { useHotel } from "../store/HotelContext";
import {
  DollarSign,
  BedDouble,
  Users,
  TrendingUp,
  CalendarDays,
  Receipt,
  UserPlus,
  ClipboardList
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";


const revenueData = [
  {month:"Jan", revenue:4200000},
  {month:"Feb", revenue:5300000},
  {month:"Mar", revenue:6100000},
  {month:"Apr", revenue:7200000},
  {month:"May", revenue:8500000},
  {month:"Jun", revenue:9800000},
];


const roomData = [
  {
    name:"Occupied",
    value:62
  },
  {
    name:"Available",
    value:18
  },
  {
    name:"Maintenance",
    value:5
  }
];






export default function AdminDashboard(){


const { activities } = useHotel();
return (

<DashboardLayout>


<div className="space-y-8">


{/* Header */}

<div>

<h1 className="
text-white
text-3xl
font-bold
">
Executive Overview
</h1>

<p className="
text-gray-400
mt-2
">
Complete overview of Suntos Hotel operations
</p>

</div>



{/* Statistics */}


<div className="
grid
grid-cols-4
gap-6
">


<Card
icon={<DollarSign/>}
title="Revenue Today"
value="₦4.8M"
/>


<Card
icon={<BedDouble/>}
title="Occupied Rooms"
value="62"
/>


<Card
icon={<Users/>}
title="Active Guests"
value="145"
/>


<Card
icon={<TrendingUp/>}
title="Monthly Growth"
value="+18%"
/>


</div>





{/* Charts */}

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


<h3 className="
text-white
font-semibold
mb-6
">
Revenue Performance
</h3>


<ResponsiveContainer
width="100%"
height={300}
>

<LineChart data={revenueData}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="revenue"
stroke="#C8A45D"
strokeWidth={3}
/>


</LineChart>


</ResponsiveContainer>


</div>





<div
className="
bg-[#181C23]
rounded-xl
p-6
"
>


<h3
className="
text-white
font-semibold
mb-6
"
>
Room Status
</h3>


<ResponsiveContainer
height={300}
>


<PieChart>

<Pie
data={roomData}
dataKey="value"
outerRadius={100}
>

{
roomData.map((entry,index)=>(

<Cell
key={index}
/>

))
}


</Pie>


</PieChart>


</ResponsiveContainer>


</div>


</div>







{/* Bottom Section */}

<div className="
grid
grid-cols-3
gap-6
">


{/* Activities */}

<div
className="
bg-[#181C23]
p-6
rounded-xl
"
>


<h3
className="
text-white
font-semibold
mb-5
"
>
Recent Activities
</h3>



<div
className="
space-y-4
"
>

{
activities.map((activity,index)=>(

<div
key={index}
className="
border-b
border-[#2A2F38]
pb-3
text-gray-300
text-sm
"
>

{activity}

</div>


))
}


</div>


</div>





{/* Quick Actions */}

<div
className="
bg-[#181C23]
p-6
rounded-xl
"
>

<h3
className="
text-white
font-semibold
mb-5
"
>
Quick Actions
</h3>


<div
className="
grid
grid-cols-2
gap-4
"
>


<Action
icon={<UserPlus/>}
text="New Guest"
/>


<Action
icon={<CalendarDays/>}
text="Reservation"
/>


<Action
icon={<Receipt/>}
text="Receipt"
/>


<Action
icon={<ClipboardList/>}
text="Reports"
/>



</div>


</div>





{/* Financial Summary */}

<div
className="
bg-[#181C23]
p-6
rounded-xl
"
>


<h3
className="
text-white
font-semibold
mb-5
"
>
Financial Summary
</h3>


<div
className="
space-y-5
"
>


<Row
label="Room Revenue"
value="₦9.2M"
/>


<Row
label="Restaurant"
value="₦2.4M"
/>


<Row
label="Laundry"
value="₦700K"
/>


<Row
label="Expenses"
value="-₦3.1M"
/>



</div>


</div>



</div>



</div>


</DashboardLayout>


)

}




function Card({
icon,
title,
value
}){

return (

<div
className="
bg-[#181C23]
rounded-xl
p-6
border
border-[#2A2F38]
"
>

<div
className="
text-[#C8A45D]
mb-4
"
>

{icon}

</div>


<p
className="
text-gray-400
"
>
{title}
</p>


<h2
className="
text-white
text-3xl
font-bold
mt-2
"
>
{value}
</h2>


</div>

)

}



function Action({
icon,
text
}){

return (

<button
className="
bg-[#101317]
hover:bg-[#222831]
transition
rounded-lg
p-4
text-gray-300
flex
flex-col
gap-3
items-center
"
>

{icon}

<span>
{text}
</span>


</button>

)

}




function Row({
label,
value
}){

return (

<div
className="
flex
justify-between
text-gray-300
"
>

<span>
{label}
</span>

<strong className="text-white">
{value}
</strong>


</div>

)

}
import {
  useState
} from "react";


import {
rooms
} from "../data/rooms";


import DashboardLayout from "../layouts/DashboardLayout";


import {
Search
} from "lucide-react";



export default function Rooms(){


const [search,setSearch]=useState("");



const filteredRooms =
rooms.filter(room=>

room.number
.toLowerCase()
.includes(search.toLowerCase())

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
Room Management
</h1>


<p className="
text-gray-400
mt-2
">
Manage hotel rooms and occupancy
</p>

</div>





{/* Search */}


<div className="
bg-[#181C23]
p-4
rounded-xl
flex
items-center
gap-3
"
>

<Search
className="text-gray-400"
/>


<input

placeholder="Search room number..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

className="
bg-transparent
outline-none
text-white
w-full
"

/>


</div>





{/* Rooms */}


<div
className="
grid
grid-cols-3
gap-6
"
>


{
filteredRooms.map(room=>(

<RoomCard
key={room.id}
room={room}
/>


))
}



</div>



</div>


</DashboardLayout>

)

}






function RoomCard({
room
}){


const statusColor={

Occupied:
"text-red-400",

Available:
"text-green-400",

Maintenance:
"text-yellow-400",

Cleaning:
"text-blue-400"

};



return (

<div
className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
"
>


<div
className="
flex
justify-between
items-start
"
>


<div>

<h2
className="
text-white
text-2xl
font-bold
"
>

Room {room.number}

</h2>


<p
className="
text-gray-400
"
>
{room.type}
</p>


</div>



<span
className={`
${statusColor[room.status]}
font-semibold
`}
>

{room.status}

</span>



</div>




<div
className="
mt-6
space-y-3
text-gray-300
"
>


<p>
Floor:
<strong className="text-white ml-2">
{room.floor}
</strong>
</p>


<p>
Price:
<strong className="text-white ml-2">
₦{room.price.toLocaleString()}
</strong>
</p>



<p>
Guest:
<strong className="text-white ml-2">
{
room.guest || "None"
}
</strong>
</p>



</div>



<button
className="
mt-6
w-full
bg-[#C8A45D]
text-black
py-2
rounded-lg
font-semibold
"
>

View Details

</button>



</div>


)

}
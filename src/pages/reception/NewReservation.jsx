import {
useState
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
rooms
} from "../../data/rooms";


export default function NewReservation(){


const [booking,setBooking]=useState({

name:"",
phone:"",
room:"",
arrival:"",
departure:""

});



function update(e){

setBooking({

...booking,

[e.target.name]:e.target.value

});

}



function submit(e){

e.preventDefault();


alert(
`Reservation created for ${booking.name}`
);


}



return (

<DashboardLayout>


<div className="max-w-3xl">


<h1 className="
text-white
text-3xl
font-bold
mb-8
">

Create Reservation

</h1>



<form

onSubmit={submit}

className="
bg-[#181C23]
rounded-xl
p-8
space-y-5
"

>



<input

name="name"

placeholder="Guest Name"

onChange={update}

className="input"

/>



<input

name="phone"

placeholder="Phone Number"

onChange={update}

className="input"

/>



<select

name="room"

onChange={update}

className="input"

>

<option>
Select Room
</option>


{
rooms
.filter(
room=>room.status==="Available"
)
.map(room=>(

<option
key={room.id}
value={room.number}
>

Room {room.number}

</option>

))
}


</select>



<input

type="date"

name="arrival"

onChange={update}

className="input"

/>



<input

type="date"

name="departure"

onChange={update}

className="input"

/>



<button

className="
bg-[#C8A45D]
text-black
px-8
py-3
rounded-lg
font-semibold
"

>

Create Booking

</button>



</form>


</div>


</DashboardLayout>

)

}
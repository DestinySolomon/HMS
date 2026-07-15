import { useState } from "react";


export default function LaundryStatusUpdate({
    order,
    updateStatus
}) {


const [status,setStatus] = useState(order.status);



function save(){

    updateStatus(
        order.id,
        status
    );

}



return (

<div className="
flex
items-center
gap-3
">


<select

value={status}

onChange={
e=>setStatus(e.target.value)
}

className="
bg-[#101317]
text-white
border
border-[#2A2F38]
rounded-lg
px-3
py-2
"

>

<option>
Received
</option>

<option>
Washing
</option>

<option>
Ready
</option>

<option>
Delivered
</option>


</select>



<button

onClick={save}

className="
bg-[#C8A45D]
text-black
px-3
py-2
rounded-lg
text-sm
"

>

Update

</button>



</div>

);

}
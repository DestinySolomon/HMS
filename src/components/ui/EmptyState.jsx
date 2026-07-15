import {
    Inbox
} from "lucide-react";


export default function EmptyState({

    title="No Data Found",

    description="There is nothing to display here."

}) {


return (

<div

className="
flex
flex-col
items-center
justify-center
py-16
text-center
"

>


<div

className="
p-4
rounded-full
bg-[#20252D]
text-[#C8A45D]
mb-5
"

>

<Inbox size={40}/>

</div>



<h3

className="
text-white
text-xl
font-semibold
"

>

{title}

</h3>



<p

className="
text-gray-400
mt-2
max-w-md
"

>

{description}

</p>



</div>

);

}
import {
    AlertCircle
} from "lucide-react";


export default function ErrorState({

message="Something went wrong."

}){


return (

<div

className="
flex
flex-col
items-center
justify-center
py-16
"

>


<AlertCircle

size={45}

className="
text-red-400
mb-4
"

/>


<h3

className="
text-white
text-xl
font-semibold
"

>

Unable To Load Data

</h3>


<p

className="
text-gray-400
mt-2
"

>

{message}

</p>


</div>

);

}
import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import StatusBadge from "../../components/ui/StatusBadge";

import {
    supervisorTasks
} from "../../data/supervisor";


export default function Tasks(){


const [tasks,setTasks] = useState(
    supervisorTasks
);



function updateStatus(id,status){

    setTasks(prev=>

        prev.map(task=>

            task.id===id

            ?

            {
                ...task,
                status
            }

            :

            task

        )

    );

}



const columns=[

{
key:"id",
label:"Task ID"
},

{
key:"task",
label:"Task"
},

{
key:"department",
label:"Department"
},

{
key:"assignedTo",
label:"Assigned To"
},

{
key:"status",
label:"Status"
},

{
key:"action",
label:"Action"
}

];



const data = tasks.map(task=>({

...task,


status:(

<StatusBadge

status={task.status}

/>

),



action:(

<select

value={task.status}

onChange={
e=>updateStatus(
task.id,
e.target.value
)
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
Pending
</option>

<option>
In Progress
</option>

<option>
Completed
</option>


</select>

)

}));



return (

<DashboardLayout>


<div className="space-y-8">


<div>

<h1 className="
text-white
text-3xl
font-bold
">

Task Management

</h1>


<p className="text-gray-400">

Monitor and assign operational tasks

</p>

</div>




<DataTable

columns={columns}

data={data}

/>



</div>


</DashboardLayout>

);

}
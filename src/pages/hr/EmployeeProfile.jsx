import DashboardLayout from "../../layouts/DashboardLayout";

import {
    employees
} from "../../data/employees";


import {
    User,
    Building2,
    Phone,
    Briefcase
} from "lucide-react";



export default function EmployeeProfile(){


const employee = employees[0];


return (

<DashboardLayout>


<div className="space-y-8">


<div>

<h1 className="
text-white
text-3xl
font-bold
">

Employee Profile

</h1>


<p className="text-gray-400">

Staff information and records

</p>

</div>




<div className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-8
grid
grid-cols-2
gap-8
">


<div className="space-y-5">


<InfoCard

icon={<User/>}

title="Full Name"

value={employee.name}

/>



<InfoCard

icon={<Phone/>}

title="Phone"

value={employee.phone}

/>



<InfoCard

icon={<Building2/>}

title="Department"

value={employee.department}

/>



<InfoCard

icon={<Briefcase/>}

title="Position"

value={employee.position}

/>



</div>





<div className="
bg-[#101317]
rounded-xl
p-6
">


<h2 className="
text-white
text-xl
font-bold
mb-5
">

Employment Summary

</h2>



<div className="space-y-4 text-gray-300">


<p>
Employee ID:

<span className="text-white ml-2">

{employee.id}

</span>

</p>



<p>
Status:

<span className="text-green-400 ml-2">

{employee.status}

</span>

</p>



<p>
Monthly Salary:

<span className="text-white ml-2">

₦250,000

</span>

</p>



<p>
Attendance:

<span className="text-white ml-2">

96%

</span>

</p>



</div>


</div>


</div>


</div>


</DashboardLayout>

);

}





function InfoCard({
icon,
title,
value
}){

return (

<div className="
flex
items-center
gap-4
">


<div className="
bg-[#101317]
text-[#C8A45D]
p-3
rounded-lg
">

{icon}

</div>



<div>

<p className="
text-gray-400
text-sm
">

{title}

</p>


<p className="
text-white
font-semibold
">

{value}

</p>


</div>


</div>

);

}
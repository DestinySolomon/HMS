import DashboardLayout from "../layouts/DashboardLayout";

export default function HrDashboard(){

return (

<DashboardLayout>

<h2 className="text-white text-3xl font-bold">
HR Dashboard
</h2>


<div className="grid grid-cols-4 gap-6 mt-8">

<Card title="Employees" value="40"/>
<Card title="Attendance Today" value="36"/>
<Card title="Leave Requests" value="8"/>
<Card title="Departments" value="7"/>

</div>


</DashboardLayout>

)

}


function Card({title,value}){

return (

<div className="bg-[#181C23] p-6 rounded-xl">

<p className="text-gray-400">
{title}
</p>

<h3 className="text-white text-3xl font-bold">
{value}
</h3>

</div>

)

}
import DashboardLayout from "../layouts/DashboardLayout";

export default function SupervisorDashboard(){

return (

<DashboardLayout>

<h2 className="text-white text-3xl font-bold">
Supervisor Dashboard
</h2>


<div className="grid grid-cols-4 gap-6 mt-8">

<Card title="Staff Online" value="28"/>
<Card title="Tasks Completed" value="86"/>
<Card title="Complaints" value="3"/>
<Card title="Inspections" value="12"/>

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
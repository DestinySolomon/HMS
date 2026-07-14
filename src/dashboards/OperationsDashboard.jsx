import DashboardLayout from "../layouts/DashboardLayout";

export default function OperationsDashboard(){

return (

<DashboardLayout>

<h2 className="text-white text-3xl font-bold">
Operations Dashboard
</h2>


<div className="grid grid-cols-4 gap-6 mt-8">

<Card title="Rooms Cleaning" value="15"/>
<Card title="Maintenance Issues" value="4"/>
<Card title="Laundry Orders" value="32"/>
<Card title="Inventory Alerts" value="6"/>

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
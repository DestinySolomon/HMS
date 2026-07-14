import DashboardLayout from "../layouts/DashboardLayout";

export default function AccountantDashboard(){

return (

<DashboardLayout>

<h2 className="text-white text-3xl font-bold">
Accounting Dashboard
</h2>


<div className="grid grid-cols-4 gap-6 mt-8">

<Card title="Income" value="₦15M"/>
<Card title="Expenses" value="₦4M"/>
<Card title="Profit" value="₦11M"/>
<Card title="Invoices" value="350"/>

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
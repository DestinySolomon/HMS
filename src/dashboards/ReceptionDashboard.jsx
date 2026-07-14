import DashboardLayout from "../layouts/DashboardLayout";

export default function ReceptionDashboard() {

  return (
    <DashboardLayout>

      <h2 className="text-white text-3xl font-bold">
        Reception Dashboard
      </h2>


      <div className="grid grid-cols-4 gap-6 mt-8">

        <Card title="Check-ins Today" value="18"/>
        <Card title="Check-outs" value="12"/>
        <Card title="Available Rooms" value="23"/>
        <Card title="Reservations" value="42"/>

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

<h3 className="text-white text-3xl font-bold mt-3">
{value}
</h3>

</div>

)

}
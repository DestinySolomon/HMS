export default function StatCard({
    title,
    value,
    icon
}) {


return (

<div

className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-2xl
p-6
transition-all
duration-300
hover:-translate-y-1
hover:border-[#C8A45D]
"

>


<div className="
flex
justify-between
items-center
">


<div>

<p className="
text-gray-400
text-sm
">

{title}

</p>


<h2 className="
text-white
text-2xl
font-bold
mt-2
">

{value}

</h2>


</div>



<div className="
text-[#C8A45D]
p-3
rounded-xl
bg-[#20252D]
">

{icon}

</div>


</div>


</div>

);

}
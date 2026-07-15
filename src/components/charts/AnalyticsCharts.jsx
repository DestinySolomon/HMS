import {

LineChart,
Line,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer

} from "recharts";


import {

revenueData,
occupancyData,
departmentPerformance

} from "../../data/reports";



export default function AnalyticsCharts(){


return (

<div className="space-y-8">


<div className="
grid
grid-cols-2
gap-6
">


<div className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
">


<h2 className="
text-white
font-bold
mb-5
">

Revenue Trend

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<LineChart

data={revenueData}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="revenue"

stroke="#C8A45D"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>





<div className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
">


<h2 className="
text-white
font-bold
mb-5
">

Occupancy Trend

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<LineChart

data={occupancyData}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="occupancy"

stroke="#C8A45D"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>


</div>





<div className="
bg-[#181C23]
border
border-[#2A2F38]
rounded-xl
p-6
">


<h2 className="
text-white
font-bold
mb-5
">

Department Performance

</h2>



<ResponsiveContainer

width="100%"

height={350}

>


<BarChart

data={departmentPerformance}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="department"/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="revenue"

/>


</BarChart>


</ResponsiveContainer>


</div>




</div>

);

}
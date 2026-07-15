import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import {

DollarSign,
TrendingUp,
Wallet,
Receipt

} from "lucide-react";


import {

financialSummary,
revenueSources,
expenseBreakdown

} from "../../data/financialSnapshot";


import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer

} from "recharts";



export default function FinancialSnapshot(){


return (

<DashboardLayout>


<div className="space-y-8">


<div>

<h1 className="
text-white
text-3xl
font-bold
">

Financial Snapshot

</h1>


<p className="text-gray-400">

Executive view of hotel finances

</p>

</div>




<div className="
grid
grid-cols-4
gap-6
">


<StatCard

title="Cash Balance"

value={`₦${financialSummary.cashBalance.toLocaleString()}`}

icon={<Wallet/>}

/>



<StatCard

title="Revenue"

value={`₦${financialSummary.totalRevenue.toLocaleString()}`}

icon={<DollarSign/>}

/>



<StatCard

title="Expenses"

value={`₦${financialSummary.totalExpenses.toLocaleString()}`}

icon={<Receipt/>}

/>



<StatCard

title="Profit"

value={`₦${financialSummary.profit.toLocaleString()}`}

icon={<TrendingUp/>}

/>


</div>





<div className="
grid
grid-cols-1
xl:grid-cols-2
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

Revenue Sources

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

data={revenueSources}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="source"/>


<YAxis/>


<Tooltip/>


<Bar dataKey="amount"/>


</BarChart>


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

Expense Breakdown

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart

data={expenseBreakdown}

>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="category"/>


<YAxis/>


<Tooltip/>


<Bar dataKey="amount"/>


</BarChart>


</ResponsiveContainer>


</div>



</div>



</div>


</DashboardLayout>

);

}
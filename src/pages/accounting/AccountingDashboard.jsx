import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/ui/StatCard";

import {
DollarSign,
TrendingDown,
Wallet,
Receipt
} from "lucide-react";

import { getAccountingSummary } from "../../services/accountingService";


export default function AccountingDashboard(){


const summary = getAccountingSummary();







return (

<DashboardLayout>


<div>


<h1
className="
text-white
text-3xl
font-bold
"
>
Accounting Overview
</h1>


<p
className="
text-gray-400
mt-2
"
>
Monitor hotel finances and transactions
</p>



<div
className="
grid
grid-cols-4
gap-6
mt-8
"
>


<StatCard

title="Total Income"

value={`₦${summary.income.toLocaleString()}`}

icon={<DollarSign/>}

trend="12% increase"

/>



<StatCard

title="Expenses"

value={`₦${summary.expenses.toLocaleString()}`}

icon={<TrendingDown/>}

/>



<StatCard

title="Net Profit"

value={`₦${summary.profit.toLocaleString()}`}

icon={<Wallet/>}

/>



<StatCard

title="Transactions"

value={summary.totalTransactions}

icon={<Receipt/>}

/>



</div>



</div>


</DashboardLayout>

)

}
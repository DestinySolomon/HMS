import DashboardLayout from "../../layouts/DashboardLayout";

import DataTable from "../../components/tables/DataTable";

import {
    expenses
} from "../../data/accounting";


export default function Expenses(){


const columns=[

    {
        key:"id",
        label:"ID"
    },

    {
        key:"title",
        label:"Expense"
    },

    {
        key:"department",
        label:"Department"
    },

    {
        key:"amount",
        label:"Amount"
    }

];



const formattedExpenses = expenses.map(item=>({

    ...item,

    amount:`₦${item.amount.toLocaleString()}`

}));



return (

<DashboardLayout>


<div className="space-y-8">


<div>

<h1 className="
text-white
text-3xl
font-bold
">
Expenses
</h1>


<p className="text-gray-400">
Track hotel spending and operational costs
</p>

</div>



<DataTable

columns={columns}

data={formattedExpenses}

/>



</div>


</DashboardLayout>

);

}
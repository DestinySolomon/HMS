import { getTransactions } from "./financeService";

export function getAccountingSummary() {

    const transactions = getTransactions();

    const income = transactions
        .filter(t => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter(t => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0);

    return {

        income,

        expenses,

        profit: income - expenses,

        totalTransactions: transactions.length

    };

}
import {
    getDatabase,
    updateDatabase
} from "./database";



export function getTransactions(){

    return getDatabase().transactions;

}



export function createTransaction(transaction){

    const db = getDatabase();

    const newTransaction = {

        id: `TRX-${Date.now()}`,

        date: new Date().toLocaleString(),

        ...transaction

    };

    db.transactions.unshift(newTransaction);

    updateDatabase(db);

    return newTransaction;

}

export function getIncome(){

    return getTransactions()

    .filter(item=>item.type==="Income")

    .reduce(

        (sum,item)=>sum+item.amount,

        0

    );

}



export function getExpenses(){

    return getTransactions()

    .filter(item=>item.type==="Expense")

    .reduce(

        (sum,item)=>sum+item.amount,

        0

    );

}



export function getProfit(){

    return getIncome()-getExpenses();

}

export function generateReceipt(payment){

    const db = getDatabase();

    const receipt = {

        id:`REC-${Date.now()}`,

        ...payment,

        issuedAt:new Date().toLocaleString()

    };

    db.receipts.unshift(receipt);

    updateDatabase(db);

    return receipt;

}

export function receivePayment({

    guest,

    room,

    amount,

    method,

    category

}){

    createTransaction({

        type:"Income",

        category,

        description:`Payment by ${guest}`,

        amount,

        method

    });



    generateReceipt({

        guest,

        room,

        amount,

        method

    });

}
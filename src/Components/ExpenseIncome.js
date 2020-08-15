import React, {useState, useContext} from 'react';
import {TransactionContext} from '../Context/TransactionContext'

function ExpenseIncome() {
    const value = useContext(TransactionContext)
    const [transaction, setTransaction] = value.transaction
    
    //for income
    const incomeObjects = transaction.filter(incomeObject => {
        return incomeObject.addIncome === true
    })
    const incomeAmounts = incomeObjects.map(transaction => parseFloat(transaction.amount))
    const income = incomeAmounts.reduce((acc, item) => acc + item, 0).toFixed(2)

    // for expense
    const expenseObjects = transaction.filter(incomeObject => {
        return incomeObject.addIncome === false
    })
    const expenseAmounts = expenseObjects.map(transaction => parseFloat(transaction.amount))
    const expense = expenseAmounts.reduce((acc, item) => acc + item, 0).toFixed(2)
    return (
        <div className="exp-inc-div">
            <div className="income">
                <h2>Income</h2>
                <h3>${income}</h3>
            </div>
            <div className="expense">
                <h2>Expense</h2>
                <h3>${expense}</h3>
            </div>
        </div>
    );
}

export default ExpenseIncome;
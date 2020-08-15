import React, { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

function CurrentBalance() {
  const value = useContext(TransactionContext);
  const [transactions, setTransactions] = value.transaction;

  //for income
  const incomeObjects = transactions.filter((incomeObject) => {
    return incomeObject.addIncome === true;
  });
  const incomeAmounts = incomeObjects.map((transactions) =>
    parseFloat(transactions.amount)
  );
  const income = incomeAmounts.reduce((acc, item) => acc + item, 0);

  // for expense
  const expenseObjects = transactions.filter((incomeObject) => {
    return incomeObject.addIncome === false;
  });
  const expenseAmounts = expenseObjects.map((transactions) =>
    parseFloat(transactions.amount)
  );
  const expense = expenseAmounts.reduce((acc, item) => acc + item, 0);

  // Totol

  const total = (income - expense).toFixed(2);

  return (
    <div className="current-balance">
      <h1>Current Balance</h1>
      <h2>${total}</h2>
    </div>
  );
}

export default CurrentBalance;

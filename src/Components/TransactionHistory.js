import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { TransactionContext } from "../Context/TransactionContext";

function TransactionHistory() {
  const value = useContext(TransactionContext);
  const [transactions, settransactions] = value.transaction;
  
  const scrollHandler = () => {
      const history = document.querySelector(".history")
      history.scrollTo(0, 0)
  }
  
  useEffect(() => {
      return scrollHandler
  }, [transactions])

    
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <div className="line"></div>
      <div className="history">
        {transactions.map((transaction) => (
          <Transaction
            key={Math.random()}
            addIncome={transaction.addIncome}
            id={transaction.id}
            description={transaction.description}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default TransactionHistory;

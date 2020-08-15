import React, { useState, createContext } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  const [addIncome, setAddIncome] = useState(true);
  return (
    <TransactionContext.Provider
      value={{
        transaction: [transactions, setTransactions],
        addIncomeState: [addIncome, setAddIncome],
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

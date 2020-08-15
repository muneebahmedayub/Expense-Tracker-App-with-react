import React, { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

function Transaction({ addIncome, id, description, amount }) {
  const value = useContext(TransactionContext);
  const [transactions, setTransactions] = value.transaction;
  const deleteFunction = (id) => {
    setTransactions(
      transactions.filter((object) => {
        return object.id !== id;
      })
    );
  };

  return (
    <div
      className={addIncome ? "history-element-plus" : "history-element-minus"}
    >
      <div>
        <button
          className="del-element"
          onClick={() => {
            deleteFunction(id);
          }}
        >
          <i className="fas fa-times"></i>
        </button>
        <p className="desc-element">{description}</p>
      </div>
      <h4 className="amount">${amount}</h4>
    </div>
  );
}

export default Transaction;

import React, { useState, useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

function AddTransaction() {
  // variables and states
  let [slider, setSlider] = useState({
    transform: "translateX(0%)",
    backgroundColor: "rgba(0, 128, 0, 0.5)",
  });
  const value = useContext(TransactionContext);

  const [transactions, setTransactions] = value.transaction;

  const [addIncome, setAddIncome] = value.addIncomeState;

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // styles
  const [inputStyle, setInputStyle] = useState({
    border: "1px solid grey",
  });

  // functions

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };

  const addTransaction = (e) => {
    e.preventDefault();
    if (description === "" || amount === "") {
      setInputStyle({
        border: "1px solid red",
      });
    } else {
      setTransactions((preTransactions) => {
        return [
          ...preTransactions,
          {
            description: description,
            amount: amount,
            addIncome: addIncome,
            id: Math.random(),
          },
        ];
      });

      setDescription("");
      setAmount("");
      setInputStyle({
        border: "1px solid grey",
      });
    }
  };

  return (
    <div className="add-transaction">
      <h2>Add New Transaction</h2>
      <div className="line"></div>
      <div className="exp-inc-btn">
        <div className="exp-inc-btn-slider" style={slider}></div>
        <button
          className="inc-btn"
          onClick={() => {
            setSlider({
              transform: "translateX(0%)",
              backgroundColor: "rgba(0, 128, 0, 0.5)",
            });
            setAddIncome(true);
          }}
        >
          Add Income
        </button>
        <button
          className="exp-btn"
          onClick={() => {
            setSlider({
              transform: "translateX(100%)",
              backgroundColor: "rgba(180, 0, 0, 0.5)",
            });
            setAddIncome(false);
          }}
        >
          Add Expense
        </button>
      </div>
      <form>
        <div>
          <div className="trans-desc">
            <label>Transaction Descrip.</label> <br />
            <input
              className="desc-input"
              style={inputStyle}
              maxLength="20"
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={updateDescription}
            />
          </div>
          <div className="trans-amnt">
            <label>Transaction Amount</label> <br />
            <input
              className="amnt-input"
              style={inputStyle}
              min="1"
              max="50000"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={updateAmount}
            />
          </div>
        </div>
        <button className="add-trans-btn" onClick={addTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;

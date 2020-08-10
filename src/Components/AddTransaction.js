import React, { useState, useContext } from 'react';
import Transaction from './Transaction';
import { TransactionContext } from '../Context/TransactionContext';

function AddTransaction() {
    let [slider, setSlider] = useState({
        transform: "translateX(0%)",
        backgroundColor: "rgba(0, 128, 0, 0.5)"
    })
    // var [addIncome, setAddIncome] = useContext(TransactionContext)
    const [addIncome, setAddIncome] = useState(true)

    const [transactions, setTransactions] = useContext(TransactionContext)

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateAmount = (e) => {
        setAmount(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault()

        setTransactions(preTransactions => [...preTransactions, {description: description, amount: amount}])
    }

    return (
        <div className="add-transaction">
            <h2>Add New Transaction</h2>
            <div className="line"></div>
            <div className="exp-inc-btn">
                <div className="exp-inc-btn-slider" style={slider}></div>
                <button className="inc-btn" onClick={
                    () => {
                        setSlider({
                            transform: "translateX(0%)",
                            backgroundColor: "rgba(0, 128, 0, 0.5)"
                        })
                        setAddIncome(true)
                    }
                }>Add Income</button><button className="exp-btn" onClick={
                    () => {
                        setSlider({
                            transform: "translateX(100%)",
                            backgroundColor: "rgba(180, 0, 0, 0.5)"
                        })
                        setAddIncome(false)
                    }
                }>Add Expense</button>
            </div>
            <form>
                <div>
                    <div className="trans-desc">
                        <label>Transaction Descrip.</label> <br />
                        <input className="desc-input" maxLength="20" type="text" placeholder="Enter Description" value={description} onChange={updateDescription} />
                    </div>
                    <div className="trans-amnt">
                        <label>Transaction Amount</label> <br />
                        <input className="amnt-input" min="1" max="50000" type="number" placeholder="Enter Amount" value={amount} onChange={updateAmount} />
                    </div>
                </div>
                <button className="add-trans-btn" onClick={addMovie}>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
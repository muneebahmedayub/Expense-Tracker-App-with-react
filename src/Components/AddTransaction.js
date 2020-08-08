import React, { useState } from 'react';

function AddTransaction() {
    let [slider, setSlider] = useState({
        transform: "translateX(0%)",
        backgroundColor: "rgba(0, 128, 0, 0.5)"
    })


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
                    }
                }>Add Income</button><button className="exp-btn" onClick={
                    () => {
                        setSlider({
                            transform: "translateX(100%)",
                            backgroundColor: "rgba(180, 0, 0, 0.5)"
                        })
                    }
                }>Add Expense</button>
            </div>
            <form>
                <div>
                    <div className="trans-desc">
                        <label>Transaction Descrip.</label> <br />
                        <input className="desc-input" maxLength="20" type="text" placeholder="Enter Description" />
                    </div>
                    <div className="trans-amnt">
                        <label>Transaction Amount</label> <br />
                        <input className="amnt-input" min="1" max="50000" type="number" placeholder="Enter Amount" />
                    </div>
                </div>
                <button className="add-trans-btn" type="button">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
import React, {useContext} from 'react'
import {TransactionContext} from '../Context/TransactionContext'

function Transaction({addIncome, description, amount }) {
    const deleteFunction = (e) => {
        e.target.parentNode.parentNode.remove()
    }

    return (
        <div className={addIncome ? "history-element-plus": "history-element-minus"}>
            <div>
                <button className="del-element" onClick={deleteFunction}><i className="fas fa-times"></i></button>
                <p className="desc-element">{description}</p>
            </div>
            <h4 className="amount">${amount}</h4>
        </div>
    );
}

export default Transaction;
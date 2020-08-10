import React from 'react'

function Transaction({ description, amount }) {
    return (
        <div className="history-element-plus">
            <div>
                <button className="del-element"><i className="fas fa-times"></i></button>
                <p className="desc-element">{description}</p>
            </div>
            <h4 className="amount">${amount}</h4>
        </div>
    );
}

export default Transaction;
import React from 'react';

function TransactionHistory() {
    return (
        <div className="transaction-history">
            <h2>Transaction History</h2>
            <div className="line"></div>
            <div className="history">
                {/* <div className="history-element-plus">
                    <div>
                        <button className="del-element"><i class="fas fa-times"></i></button>
                        <p className="desc-element">Income</p>
                    </div>
                    <h4 className="amount">$2000</h4>
                </div>
                <div className="history-element-minus">
                    <div>
                        <button className="del-element"><i class="fas fa-times"></i></button>
                        <p className="desc-element">Expense</p>
                    </div>
                    <h4 className="amount">$300</h4>
                </div> */}
            </div>
        </div>
    );
}

export default TransactionHistory;
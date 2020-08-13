import React, { useContext } from 'react';
import Transaction from './Transaction'
import { TransactionContext } from '../Context/TransactionContext';

function TransactionHistory({addIncome}) {
    const value = useContext(TransactionContext)
    const [transactions, settransactions] = value.transaction
    return (
         <div className="transaction-history">
             <h2>Transaction History</h2>
             <div className="line"></div>
             <div className="history">
                
                {transactions.map (transaction => (
                    <Transaction addIncome={addIncome} key={Math.random()} description={transaction.description} amount={transaction.amount} />
                ))}


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
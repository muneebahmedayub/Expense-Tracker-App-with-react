import React, { useState, createContext } from 'react';
import TransactionHistory from '../Components/TransactionHistory';

export const TransactionContext = createContext()

export const TransactionProvider = props => {
    const [transactions, setTransactions] = useState([
        
    ]);



    const [addIncome, setAddIncome] = useState(true)

    return (
        <TransactionContext.Provider value={[transactions, setTransactions]} income={[addIncome, setAddIncome]}>
            {props.children}
        </TransactionContext.Provider>
    );
}
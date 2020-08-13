import React, { useState, createContext } from 'react';

export const TransactionContext = createContext()

export const TransactionProvider = props => {
    const [transactions, setTransactions] = useState([
        
    ]);


    return (
        <TransactionContext.Provider value={{transaction: [transactions, setTransactions]}}>
            {props.children}
        </TransactionContext.Provider>
    );
}
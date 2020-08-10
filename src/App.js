import React from 'react';
import './App.css';
import Heading from './Components/Heading'
import CurrentBalance from './Components/CurrentBalance'
import ExpenseIncome from './Components/ExpenseIncome';
import TransactionHistory from './Components/TransactionHistory'
import AddTransaction from './Components/AddTransaction'
import {TransactionProvider} from './Context/TransactionContext'

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Heading />
        <CurrentBalance />
        <ExpenseIncome />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;

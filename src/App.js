import React from 'react';
import './App.css';
import Heading from './Components/Heading'
import CurrentBalance from './Components/CurrentBalance'
import ExpenseIncome from './Components/ExpenseIncome';
import TransactionHistory from './Components/TransactionHistory'
import AddTransaction from './Components/AddTransaction'

function App() {
  return (
    <div className="App">
      <Heading />
      <CurrentBalance />
      <ExpenseIncome />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;

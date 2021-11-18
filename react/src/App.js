import './App.css';
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: "Car Insurance",
    amount: 94.12,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: "Test",
    amount: 94.12,
    date: new Date(2020, 5, 14)
  }
]

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
  }

  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

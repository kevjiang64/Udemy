import './App.css';
import Expenses from './components/Expenses/Expenses.js';

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;

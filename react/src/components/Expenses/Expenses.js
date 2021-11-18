import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    
    const [filteredYear, setFilteredYear] = useState('2020');

    const onSaveYearHandler = (data) => {
        setFilteredYear(data);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

  

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSaveYear={onSaveYearHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    );
}

export default Expenses;
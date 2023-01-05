import "./App.css";
import { useState } from "react";
import expenses from "./components/data";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesChart from "./components/ExpenseChart";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

function App() {
  const [addExpense, setAddExpense] = useState(false);
  const [expenseData, setExpenseData] = useState(expenses);
  const [sfilterYear, setSfilterYear] = useState("2020");
  const dataHandler = (expensed) => {
    setExpenseData((prevstate) => {
      return [{ id: Math.random().toString(), ...expensed }, ...prevstate];
    });
  };
  const filterYear = (event) => {
    event.preventDefault();
    setSfilterYear(event.target.value);
  };
  const dataFilter = expenseData.filter((exp) => {
    return exp.date.getFullYear().toString() === sfilterYear;
  });
  function show() {
    setAddExpense((prevState) => !prevState);
  }
  return (
    <div className="App App-header">
      {addExpense ? (
        <div>
          <NewExpense onsh={dataHandler} />
          <button className="buttonexp" onClick={show}>
            x
          </button>
        </div>
      ) : (
        <button className="buttonexp" onClick={show}>
          +
        </button>
      )}
      <div className="expenses">
        <ExpensesChart expenses={dataFilter} />
        <ExpenseFilter oncf={filterYear} selecteddata={sfilterYear} />
        <ExpenseItem data={dataFilter}></ExpenseItem>
      </div>
    </div>
  );
}

export default App;

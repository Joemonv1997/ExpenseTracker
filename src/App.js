import ExpenseItem from "./components/ExpenseItem";
import expenses from './components/data'
import './App.css'
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
function App() {
  const [modl,setModl]=useState(false);
  const [expenseData,setExpenseData]=useState(expenses)
  const [sfilterYear,setSfilterYear]=useState("2020")
  const dataHandler=(expensed)=>{
    setExpenseData((prevstate)=>{return [{id:Math.random().toString(),...expensed},...prevstate]})
    }
    const filterYear=(event)=>{
      event.preventDefault()
      setSfilterYear(event.target.value)
      const dataFilter=expenses.filter((exp)=>{
        return exp.date.getFullYear===event.target.value
      })
    }
  function show(){
    modl ? setModl(false):setModl(true)
    
  }
  return (
    <div className="App App-header">
      
      {
        modl ?<div><NewExpense onsh={dataHandler} />
        <button className="buttonexp" onClick={show}>x</button>
        </div>
        : 
        <button className="buttonexp" onClick={show}>+</button>
      }
      
      <div className="expenses">
      <ExpenseFilter oncf={filterYear} selecteddata={sfilterYear}/>
      <ExpenseItem data={expenseData}></ExpenseItem></div>
    </div>
  );
}

export default App;

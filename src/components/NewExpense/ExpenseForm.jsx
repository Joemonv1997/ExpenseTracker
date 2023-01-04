import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [expenseTitle,setExpenseTitle]=useState('')
    const [expenseAmount,setExpenseAmount]=useState(0)
    const [expenseDate,setExpenseDate]=useState('')
    function submithandler(event){
        event.preventDefault()
        const dataEntered=({
            title: expenseTitle,
            amount: expenseAmount,
            date: new Date(expenseDate)
        })
        props.onch(dataEntered)
        setExpenseTitle('')
        setExpenseAmount(0)
        setExpenseDate('')
        
    }
  return (
    <div className='new-expense__controls'>
        <form className='new-expense__control' onSubmit={submithandler}>
            <label>Title</label>
            <input type='text' value={expenseTitle} onChange={(event)=>{
                setExpenseTitle(event.target.value)
            }}/>
            <label>Amount</label>
            <input type='number' value={expenseAmount} onChange={(event)=>{
                setExpenseAmount(event.target.value)
            }}/>
            <label>Date</label>
            <input type='date' value={expenseDate} onChange={(event)=>setExpenseDate(event.target.value)}/>
            <br/><br/>
            <button type='submit'>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseForm
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
function NewExpense(props) {
  return (

    <div className='new-expense'>
        <ExpenseForm onch={props.onsh}/>
        
        
    </div>
    

  )
}

export default NewExpense
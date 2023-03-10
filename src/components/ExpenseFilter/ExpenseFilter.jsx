import React, { useState } from 'react'
import './ExpenseFilter.css'
function ExpenseFilter(props) {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter for the {props.selecteddata} year</label>

        <select onChange={props.oncf} value={props.selecteddata}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
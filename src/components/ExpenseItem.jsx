import React from "react";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem({ data }) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return (
        <div>
      {data.map((exp) => {
        return (
            <Card key={exp.id}>
          <div className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">{month[exp.date.getMonth()]}</div>
                <div className="expense-date__day">{exp.date.getDay()}</div>
                <div className="expense-date__year">{exp.date.getFullYear()}</div> 
            </div>
            <div className="expense-item__description">
              <h2>{exp.title}</h2>
              <div className="expense-item__price">{exp.amount}</div>
            </div>
          </div>
          </Card>
        );
      })}
      </div>

  );
}

export default ExpenseItem;

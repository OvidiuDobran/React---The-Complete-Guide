import { useState } from "react";
import Card from "../card/Card";
import ExpenseDate from "../expense-date/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseAmount = props.amount;

  const [title, setTitle] = useState(props.title);

  function clickHandler() {}

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

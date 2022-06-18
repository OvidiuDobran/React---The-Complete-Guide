import Card from "../card/Card";
import ExpenseDate from "../expense-date/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseAmount = props.amount;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expenseDate}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

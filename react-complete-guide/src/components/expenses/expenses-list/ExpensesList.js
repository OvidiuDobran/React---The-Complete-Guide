import ExpenseItem from "../../expense-item/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  return props.items.length === 0 ? (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  ) : (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;

import { useState } from "react";
import Card from "../card/Card";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const { items } = props;

  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedOption) {
    console.log(selectedOption);
    setFilteredYear(selectedOption);
  }

  return (
    <Card className="items">
      <ExpensesFilter
        onFilterChanged={filterChangeHandler}
        selected={filteredYear}
      ></ExpensesFilter>
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;

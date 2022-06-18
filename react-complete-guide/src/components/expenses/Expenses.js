import { useState } from "react";
import Card from "../card/Card";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const { items } = props;

  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedOption) {
    setFilteredYear(selectedOption);
  }

  return (
    <Card className="items">
      <ExpensesFilter
        onFilterChanged={filterChangeHandler}
        selected={filteredYear}
      ></ExpensesFilter>
      {items
        .filter((item) => +filteredYear === item.date.getFullYear())
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))}
    </Card>
  );
}

export default Expenses;

import { useState } from "react";
import Card from "../card/Card";
import ExpensesChart from "../expenses-chart/ExpensesChart";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import ExpensesList from "./expenses-list/ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const { items } = props;

  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedOption) {
    setFilteredYear(selectedOption);
  }

  const filteredExpenses = items.filter(
    (item) => +filteredYear === item.date.getFullYear()
  );

  return (
    <Card className="items">
      <ExpensesFilter
        onFilterChanged={filterChangeHandler}
        selected={filteredYear}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;

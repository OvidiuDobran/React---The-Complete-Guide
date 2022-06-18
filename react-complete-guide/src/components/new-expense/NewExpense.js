import ExpenseForm from "./expense-form/ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;

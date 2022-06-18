import { useState } from "react";
import ExpenseForm from "./expense-form/ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isFormShown, setIsFormShown] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  }

  function formCancelHandler() {
    setIsFormShown(false);
  }

  function addNewHandler() {
    setIsFormShown(true);
  }

  return (
    <div className="new-expense">
      {isFormShown ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onFormCancel={formCancelHandler}
        ></ExpenseForm>
      ) : (
        <div>
          <button onClick={addNewHandler}>Add new Expense</button>
        </div>
      )}
    </div>
  );
}

export default NewExpense;

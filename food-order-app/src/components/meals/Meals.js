import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./meals-summary/MealsSummary";

function Meals() {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default Meals;

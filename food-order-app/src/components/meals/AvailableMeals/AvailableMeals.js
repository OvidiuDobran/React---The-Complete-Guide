import { useEffect, useState } from "react";
import Card from "../../layout/Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-a8b9e-default-rtdb.firebaseio.com/meals.son"
      );
      if (!response.ok) {
        throw Error("Something went wrong!");
      }
      const resData = await response.json();
      const loadedMeals = [];
      for (let key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    try {
      fetchMeals().catch((err) => {
        setError(err.message);
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

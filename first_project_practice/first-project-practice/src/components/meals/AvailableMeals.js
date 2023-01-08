import MealItem from "./MealItem";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(false);
  useEffect(() => {
    const fetchItem = async () => {
      setLoadingState(true);
      let response;
      try {
        response = await fetch(
          "https://food-order-app-e1aea-default-rtdb.firebaseio.com/meals.json"
        );
      } catch (error) {
        throw new Error("something went wrong ;-<");
      }
      // if (!response.ok) {
      //   console.log("not ok");
      //   throw new Error("Something went wrong ;-(");
      // }
      // console.log(response.ok);
      const responseJson = await response.json();
      const loadedItems = [];
      for (let key in responseJson) {
        loadedItems.push({
          id: key,
          name: responseJson[key].name,
          description: responseJson[key].description,
          price: responseJson[key].price,
        });
      }
      setDUMMY_MEALS(loadedItems);
      setLoadingState(false);
    };

    fetchItem().catch((error) => {
      console.log(error);
      setLoadingState(false);
      setErrorState(error.message);
    });
  }, []);

  if (loadingState) {
    return (
      <section className={styles.mealsLoading}>
        <p>LOADING DATA...</p>
      </section>
    );
  }
  if (errorState) {
    return (
      <section className={styles.errorLoading}>
        <p>{errorState}</p>
      </section>
    );
  }
  const ListOfMeals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{ListOfMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

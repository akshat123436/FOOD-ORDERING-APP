import MealForm from "./MealForm";
import { useContext } from "react";
import styles from "./MealItem.module.css";
import cardContext from "../../store/card-context";
const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;
  const cardCtxt = useContext(cardContext);
  const onAddToCart = (amount) => {
    cardCtxt.addCartItem({
      id: props.id,
      price: props.price,
      amount: amount,
      name: props.name,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddToCart={onAddToCart}></MealForm>
      </div>
    </li>
  );
};

export default MealItem;

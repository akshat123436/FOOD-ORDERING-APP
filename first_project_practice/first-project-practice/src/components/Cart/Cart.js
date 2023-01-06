import { useContext } from "react";
import styles from "./Cart.module.css";
import cardContext from "../../store/card-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cardCtxt = useContext(cardContext);
  const hasItems = cardCtxt.items.length > 0;
  const onAddHandler = () => {};
  const onRemoveHandler = () => {};
  const cartItmes = (
    <ul className={styles["cart-items"]}>
      {cardCtxt.items.map((items) => (
        <CartItem
          name={items.name}
          price={items.price}
          amount={items.amount}
          onAdd={onAddHandler}
          onRemove={onRemoveHandler}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItmes}
      <div className={styles.total}>
        <span>Total Amount : </span>
        <span>{cardCtxt.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

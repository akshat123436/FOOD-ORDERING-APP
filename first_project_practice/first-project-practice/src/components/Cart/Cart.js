import { Fragment, useContext, useState } from "react";
import styles from "./Cart.module.css";
import cardContext from "../../store/card-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [CheckingOutState, setCheckingOutState] = useState(false);
  const cardCtxt = useContext(cardContext);
  const hasItems = cardCtxt.items.length > 0;
  const onAddHandler = (item) => {
    cardCtxt.addCartItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cardCtxt.removeCartItem(id);
  };
  const cartItmes = (
    <ul className={styles["cart-items"]}>
      {cardCtxt.items.map((items) => (
        <CartItem
          key={Math.random()}
          name={items.name}
          price={items.price}
          amount={items.amount}
          onAdd={onAddHandler.bind(null, items)}
          onRemove={onRemoveHandler.bind(null, items.id)}
        ></CartItem>
      ))}
    </ul>
  );
  const checkOutSetter = () => {
    setCheckingOutState(true);
  };
  const ActionButtons = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={checkOutSetter}>
          Order
        </button>
      )}
    </div>
  );
  const checkOutRemover = () => {
    setCheckingOutState(false);
  };

  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const onOrder = async (checkOutData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-order-app-e1aea-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: checkOutData,
          orderedItems: cardCtxt.items,
        }),
      }
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
    cardCtxt.clearCart();
  };

  const cartView = (
    <Fragment>
      {cartItmes}
      <div className={styles.total}>
        <span>Total Amount : </span>
        <span>{cardCtxt.totalAmount.toFixed(2)}</span>
      </div>
      {CheckingOutState && (
        <Checkout setCheckOut={checkOutRemover} onOrder={onOrder}></Checkout>
      )}
      {!CheckingOutState && ActionButtons}
    </Fragment>
  );
  const submittingView = <p>Placing the order !!</p>;
  const submittedView = (
    <Fragment>
      <p>Order was placed successfully !</p>
      <button className={styles.button} onClick={props.onClose}>
        Close
      </button>
    </Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!IsSubmitting && !IsSubmitted && cartView}
      {IsSubmitting && !IsSubmitted && submittingView}
      {!IsSubmitting && IsSubmitted && submittedView}
    </Modal>
  );
};

export default Cart;

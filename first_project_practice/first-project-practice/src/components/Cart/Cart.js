import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItmes = (
    <ul className={styles["cart-items"]}>
      {[{ id: "1", name: "shushi" }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItmes}
      <div className={styles.total}>
        <span>Total Amount : </span>
        <span>35</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

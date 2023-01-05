import React from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
  return (
    <div className={`${styles.button} ${styles.bump}`}>
      <CartIcon className={styles.icon}></CartIcon>
      <span>Your cart</span>
      <span className={styles.badge}>0</span>
    </div>
  );
};

export default HeaderCartButton;

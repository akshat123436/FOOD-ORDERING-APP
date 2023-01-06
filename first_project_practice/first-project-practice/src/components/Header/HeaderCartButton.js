import React, { useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={`${styles.button} ${styles.bump}`}>
      <span>
        <CartIcon className={styles.icon}></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{count}</span>
    </div>
  );
};

export default HeaderCartButton;

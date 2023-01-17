import React, { useState, useContext, useEffect } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";
import cardContext from "../../store/card-context";
const HeaderCartButton = (props) => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const cartContext = useContext(cardContext);
  const noOfCartItems = cartContext.items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);
  const classes = `${styles.button} ${isButtonHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);
  return (
    <div className={classes} onClick={props.onShow}>
      <span>
        <CartIcon className={styles.icon}></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{noOfCartItems}</span>
    </div>
  );
};

export default HeaderCartButton;

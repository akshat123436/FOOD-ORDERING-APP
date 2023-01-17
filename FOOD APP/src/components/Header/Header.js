import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsimage from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow}></HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsimage} alt="not found" />
      </div>
    </React.Fragment>
  );
};

export default Header;

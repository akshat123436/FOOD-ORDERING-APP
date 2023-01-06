import { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealForm.module.css";
const MealForm = (props) => {
  const [isAmountValid, setisAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setisAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ ADD</button>
      {!isAmountValid && <p>Please enter a valid amount between 1 - 5</p>}
    </form>
  );
};

export default MealForm;

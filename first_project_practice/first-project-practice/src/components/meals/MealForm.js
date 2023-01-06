import Input from "../UI/Input";
import styles from "./MealForm.module.css";

const MealForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ ADD</button>
    </form>
  );
};

export default MealForm;

import { useRef, useState } from "react";
import classes from "../MealItem/MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const entredAmount = amountInputRef.current.value;
    const enterAmountNumber = +entredAmount;

    if (
      entredAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="مقدار"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">اضافه کردن</button>
      {!amountIsValid && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;

import { useContext } from "react";
import CartContext from "../../../store/Cart-Context";
import classes from "../MealItem/MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ meal }) => {
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };
  const cartCtx = useContext(CartContext);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{meal.price}تومان</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

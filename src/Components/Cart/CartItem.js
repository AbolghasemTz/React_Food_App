import classes from "../Cart/CartItem.module.css";
const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}تومان</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};

export default CartItem;

import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../../store/Cart-Context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const btnClasses = `${classes.button} ${classes.bump}`;

  const cartCtx = useContext(CartContext);
  const numberOfCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <div>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>سبد خرید</span>
        <span className={classes.badge}>{numberOfCart}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;

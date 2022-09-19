import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "../../Components/Cart/Cart.module.css";

import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={(id) => cartRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
      )
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>قیمت کل</span>
        <span>
          {cartCtx.totalAmount}
          <span style={{ display: "inline-block", paddingRight: "10px" }}>
            تومان
          </span>
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt "]} onClick={props.onClose}>
          بستن
        </button>
        <button className={classes.button}>سفارش</button>
      </div>
    </Modal>
  );
};

export default Cart;

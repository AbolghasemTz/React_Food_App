import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultReducer = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const UpdatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const cartItem = state.items[cartItemIndex];
    let updatedItems;
    if (cartItem) {
      const updatedItem = {
        ...cartItem,
        amount: cartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));
    return {
      items: updatedItems,
      totalAmount: UpdatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const cartItem = state.items[cartItemIndex];
    const UpdatedTotalAmount = state.totalAmount - cartItem.price;

    let updatedItems;

    if (cartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...cartItem, amount: cartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));

    return {
      items: updatedItems,
      totalAmount: UpdatedTotalAmount,
    };
  }

  return defaultReducer;
};
const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultReducer
  );
  const addItemTocCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemTocCartHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

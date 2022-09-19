import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, SetCartIsShow] = useState(false);
  const showCartHandler = () => {
    SetCartIsShow(true);
  };
  const hideCartHandler = () => {
    SetCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

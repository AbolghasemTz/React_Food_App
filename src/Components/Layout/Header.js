import mealsImage from "../../assets/meals.jpg";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/logo.png";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
        <HeaderCartButton onClick={props.showCartHandler} />
      </header>
      <div className={classes[`main-image`]}>
        <img src={mealsImage} alt="A table of delicious food!" />
      </div>
    </>
  );
};

export default Header;

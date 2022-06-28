import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";
import CartIcon from "../../Cart/cart-icon/CartIcon";
import CartButton from "./cart-button/CartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart}></CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;

import { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import CartIcon from "../../../Cart/cart-icon/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default CartButton;

import { useContext, useEffect, useState } from "react";
import CartContext from "../../../../store/cart-context";
import CartIcon from "../../../Cart/cart-icon/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfCartItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  } `;

  useEffect(() => {
    if (numberOfCartItems === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => setButtonIsHighlighted(false), 300);
    return () => clearTimeout(timer);
  }, [numberOfCartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default CartButton;

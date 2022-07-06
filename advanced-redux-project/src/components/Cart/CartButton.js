import classes from "./CartButton.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CartButton = (props) => {
  const itemCount = useSelector((state) => state.cart.items.length);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;

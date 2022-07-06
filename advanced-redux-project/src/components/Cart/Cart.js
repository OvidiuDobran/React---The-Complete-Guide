import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/exports";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!cart.items.length && (
        <p>There are no items in your cart. Start adding some!</p>
      )}
      {cart.items.length > 0 && (
        <ul>
          {cart.items.map((item, index) => (
            <CartItem
              key={index + item.title}
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.total,
                price: item.price,
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;

import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../layout/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = ctx.totalAmount.toFixed(2) + "";

  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch("https://react-http-a8b9e-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ user: userData, orderedItems: ctx.items }),
    });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item, index) => (
        <CartItem
          key={item.id + index}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCancel={props.onClose}
          onConfirm={submitOrderHandler}
        ></Checkout>
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;

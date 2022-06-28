import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../layout/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = ctx.totalAmount.toFixed(2) + "";

  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem(item);
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

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;

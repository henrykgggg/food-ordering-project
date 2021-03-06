import Modal from "../UI/Modal";
import classes from './Cart.module.css';
const Cart = (props) => {
  const cartItems =<ul className={classes['cart-items']}>{ [{ id: "c1", name: "sushi", amount: "2", price: 12.9 }].map(
    (item) => <li>{item.name}</li>
  )}</ul>;
  return (
    <Modal onclose={props.onclose}>
     {cartItems}
      <div className={classes.total}> 
          <span> Total amount</span>
          <span>35.62</span>
      </div>
      <div className={classes.actions}>
<button className={classes['button--alt']} onClick={props.onclose}>close</button>
<button className={classes.button}>Order</button>

      </div>
    </Modal>
  );
};

export default Cart;

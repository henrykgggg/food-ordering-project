import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onclck}>
           <span className={classes.icon}>
<CartIcon/>
           </span>
           <span>YOUR CART</span>
           <span className={classes.badge}>
               3
           </span>
       </button>
    )
}

export default HeaderCartButton;

import {Fragment} from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return <Fragment>
      <header className={classes.header}>
          <h1>ELL ELOHE MEALS</h1>
        <HeaderCartButton onclck={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicius food!"/>
      </div>
  </Fragment>
};

export default Header;

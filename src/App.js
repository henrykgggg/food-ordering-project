

import Header from "./components/Layout/Header";
import { Fragment,useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
const App = () => {

  const [cartIsShown,setCartIsShown]=useState(false)

  const ShowCartHandler =()=>{
    setCartIsShown(true)
  }
  const HideCartHandler =()=>{
    setCartIsShown(false)
  }

  return (
   
    <Fragment>
     { cartIsShown &&<Cart onclose={HideCartHandler}/>}
      <Header  onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
   

  );
};

export default App;

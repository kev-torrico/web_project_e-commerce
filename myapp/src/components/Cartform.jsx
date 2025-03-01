import React, { useState } from "react";
import Navbar from "./Cardcomponents/Navbar";
import Amazon from "./Cardcomponents/Amazon";
// import Shopcart from "./Cardcomponents/Shopcart";
import Cart from "./Cardcomponents/Cart";
import "./Cartform.css";

const Cartform = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      //it goes through the cart and verifies that the item is already added
      if (item.id === product.id) {
        isPresent = true; //if it is true, the state of isPresent changes
      }
    });
    if (isPresent) {
      //if the product is already in the cart, a warning message will appear and last for about 2 seconds.
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]); //It copies the cart array and adds the item
  };

  const handleChange = (item, amount) => {
    //when we wan to update the quantity, amount will be the new quantity
    let ind = -1;
    const index = cart.findIndex((data) => data.id === item.id); //It looks for a index of product in the cart
    if (index === -1) return; //if it does not find any product, it will end

    //It copies the cart and updates the amount
    const updatedCart = [...cart];
    updatedCart[index].amount += amount;
    //It prevents the amount to be 0
    if (updatedCart[index].amount < 1) {
      updatedCart[index].amount = 1;
    }
    //Updates the state of the new cart
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      <h1 className="content_heading">
        Meet the internet's favorite skincare.
      </h1>
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && (
        <div className="Warning">Item is already added to your cart</div>
      )}
    </div>
  );
};

export default Cartform;

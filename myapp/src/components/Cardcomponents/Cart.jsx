import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/cart.css";
import PropTypes from "prop-types";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setprice] = useState(0);

  const handleRemove = (id) => {
    const newArray = cart.filter((item) => item.id !== id); //it filters the cart array and eliminates the element that has an especific id
    setCart(newArray);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (total += item.amount * item.price)); //The amount of each item multiplied by the price will be added to "total"
    setprice(total); //it sets the total as the price
  };
  useEffect(() => {
    handlePrice();
  }, [cart]); //it only executes when the state of the cart changes
  return (
    <div>
      <article>
        {cart?.map(
          (
            item // "?" makes sure that the cart is not null or undefined
          ) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt="img" />
                <p>
                  {item.title} <span className="item_price">${item.price}</span>
                </p>
              </div>
              <div className="add_subtractbtn">
                <button onClick={() => handleChange(item, +1)}> + </button>
                <button> {item.amount}</button>
                <button onClick={() => handleChange(item, -1)}> - </button>
              </div>
              <div className="price_btn">
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          )
        )}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>= ${price}</span>
        </div>
        <div className="cart_footer"></div>
      </article>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Cart;

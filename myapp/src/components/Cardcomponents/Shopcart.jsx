import React from "react";
import PropTypes from "prop-types";
import "../Styles/Shopcart.css";

const Shopcart = ({ item, handleClick }) => {
  if (item) {
    //if the list is true the function will work
    const { title, price, img } = item; //deconstruction

    return (
      <div className="cards">
        <div className="image_box">
          <div className="details">
            <p>{title}</p>
            <p>Price: ${price}</p>
            <img src={img} alt="" />
            <button onClick={() => handleClick(item)}>Add to Cart</button>{" "}
            {/*Do not invoke the function handleClick immediately because it will be execute everytime the componente renders*/}
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

Shopcart.propTypes = {
  item: PropTypes.shape({
    //.shape is required when using a complex object with multiple properties
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};

export default Shopcart;

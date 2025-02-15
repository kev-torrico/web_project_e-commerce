import React from "react";
import PropTypes from "prop-types";
import "../Styles/Shopcart.css";

const Shopcart = ({ item }) => {
  if (item) {
    //if the list is true the function will work
    const { title, price, img } = item; //deconstruction
    return (
      <div className="cards">
        <div className="image_box">
          <div className="details">
            <p>{title}</p>
            <p>{price}</p>
            <img src={img} alt="" />
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>There is no items</p>;
  }
};

Shopcart.propTypes = {
  item: PropTypes.shape({
    //.shape is required when using a complex object with multiple properties
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default Shopcart;

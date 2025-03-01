import React from "react";
import list from "../data";
import Shopcart from "./Shopcart";
import "../Styles/Amazon.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((product) => (
        <Shopcart key={product.id} handleClick={handleClick} item={product} /> //each product of the list will be a product, then these will be a property
      ))}
    </section>
  );
};
Amazon.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Amazon;

import React from "react";
import list from "../data";
import Shopcart from "./Shopcart";
import "../Styles/Amazon.css";

const Amazon = () => {
  return (
    <div>
      {list.map((product) => (
        <Shopcart key={product.id} item={product} /> //each product of the list will be a product, then these will be a property
      ))}
    </div>
  );
};

export default Amazon;

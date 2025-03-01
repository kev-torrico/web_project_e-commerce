import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Styles/Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <ShoppingCartIcon />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  setShow: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

export default Navbar;

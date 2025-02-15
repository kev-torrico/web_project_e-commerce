import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">My shop</span>
        <div className="cart">
          <span>
            <ShoppingCartIcon />
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

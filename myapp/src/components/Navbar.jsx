import React from "react";
import { Link } from "react-router-dom";
import Imagenfresh from "../img/logo.avif";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useState } from "react";

const Navbar = () => {
  const [data, setData] = useState(false);
  const [menu, setMenu] = useState(false);

  const inputHandler = () => {
    setData(!data);
  };
  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="navbar_div">
        <div>
          <input type="text" placeholder="Search here" />
          <SearchIcon className="Search_icon_input" />
          <CloseIcon onClick={inputHandler} className="close_icon" />
        </div>
        <div>
          <div className="navbar_main">
            <div onClick={inputHandler}>
              <div>
                <SearchIcon className="Search_icon" />
              </div>
              <MenuIcon onClick={menuHandler} className="menu_icon" />
            </div>
            <div>
              <img
                src={Imagenfresh}
                className="heading_logo"
                alt="Logo of refresh"
              />
            </div>
            <div className="bad_search">
              <SearchIcon onClick={inputHandler} className="Search_icon2" />
              <LocalMallIcon className="bag_icon" />
            </div>
          </div>
          <div className="Nav_links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
            <Link to="/privacy" className="link">
              Privacy
            </Link>
            <Link to="/loginform" className="link">
              Loginform
            </Link>
            <Link to="/signup" className="link">
              Signupform
            </Link>
          </div>
          <div>
            <Link to="/" className="sidebar_link">
              Home
            </Link>
            <Link to="/contact" className="sidebar_link">
              Contact
            </Link>
            <Link to="/privacy" className="sidebar_link">
              Privacy
            </Link>
            <Link to="/loginform" className="sidebar_link">
              Loginform
            </Link>
            <Link to="/signup" className="sidebar_link">
              Signupform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

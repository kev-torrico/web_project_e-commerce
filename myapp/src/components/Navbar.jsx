import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/loginform">Loginform</Link>
      <Link to="/signup">Signupform</Link>
    </div>
  );
};

export default Navbar;

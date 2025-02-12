import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Loginform from "./components/Loginform";
import Privacy from "./components/Privacy";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Privacy />} path="/privacy" />
          <Route element={<Loginform />} path="/loginform" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

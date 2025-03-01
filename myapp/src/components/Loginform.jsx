import React from "react";
import { useState } from "react";
import "./Loginup.css";

const account1 = {
  username: "Carlos",
  pin: 1111,
};
const account2 = {
  username: "Steven",
  pin: 2222,
};
const account3 = {
  username: "Jessica",
  pin: 3333,
};
const account4 = {
  username: "David",
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

const Loginform = () => {
  const [user, setUser] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents page reload

    const matchingAccount = accounts.find(
      (account) => account.username === user && account.pin === Number(pin)
    );
    if (matchingAccount) {
      console.log("Login successful!");
      setError("You are successfully login the page"); //Clear errors if Login is succesful
    } else {
      setError("Invalid username or password");
    }
  };
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <label>
          Username
          <input type="text" value={user} onChange={handleUserChange} />
        </label>
        <label>
          Password
          <input type="text" value={pin} onChange={handlePinChange} />
        </label>
        <br />
        <button className="loginbtn" type="submit">
          Login
        </button>
        <div className="error">{error ? <div>{error}</div> : null}</div>
      </form>
    </div>
  );
};

export default Loginform;

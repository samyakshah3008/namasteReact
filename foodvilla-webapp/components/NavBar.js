import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../hooks/useStatus";

const NavBar = () => {
  const [auth, setAuth] = useState(true);
  const isStatusOnline = useStatus();
  const authHandler = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };
  return (
    <>
      <div>NavBar</div>
      <h1>{isStatusOnline ? "✅" : "🔴"}</h1>
      <Link to="/about">About</Link>
      <button onClick={authHandler}> {auth ? "Login" : "Logout"} </button>
      <Link to="/">HOME</Link>
    </>
  );
};

export default NavBar;

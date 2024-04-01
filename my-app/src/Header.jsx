import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <div id="header">
        {/* <h1>Food Villa</h1> */}
        <a href="#">
          <img
            src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7"
            alt="Logo"
            id="logo"
          />
        </a>

        <div className="nav-items">
          <ul>
            <Link to="/">
              <li>Home </li>{" "}
            </Link>
            <Link to="/about">
              <li>About </li>{" "}
            </Link>
            <Link to="/contact">
              <li>Contact </li>{" "}
            </Link>
            <li>Cart</li>
          </ul>
        </div>
        {isLogged ? (
          <button onClick={() => setIsLogged(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLogged(true)}>Login</button>
        )}
      </div>
    </>
  );
}

export default Header;

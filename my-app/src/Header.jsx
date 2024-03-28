import { useState } from "react";
import "./index.css";
function loggedIn(){
  //API authetication
  return true;
}

function Header() {
  const [isLogged , setIsLogged] = useState(false);
  return (
    <>
      <div id="header">
        {/* <h1>Food Villa</h1> */}
        <a href="#">
        <img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7" alt="Logo" id="logo"/>
        </a>
        
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {
        (isLogged)
        ?
        <button onClick={()=> setIsLogged(false)}>Logout</button>
        :
        <button onClick={()=> setIsLogged(true)}>Login</button>
        }
      </div>
    </>
  );
}

export default Header;

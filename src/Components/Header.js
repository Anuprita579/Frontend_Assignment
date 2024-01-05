import { useState } from "react";
import foodvista_logo from "/public/resources/foodvista_logo.png";
import { Link } from "react-router-dom";

const loggedIn = () => {
    //Authenticate
    return false;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <>
        <div className="header">
            <div className="header-left">
                <img src={foodvista_logo} />
            </div>
            <div className="header-right">
                <ul className="navlist">
                    <Link to="/" className="navlist-link"><li>Home</li></Link>
                    <Link to="/about" className="navlist-link"><li>About Us</li></Link>
                    <Link to="/contact" className="navlist-link"><li>Contact Us</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)} className="login-button">Logout</button> : <button onClick={()=>setIsLoggedIn(true)} className="login-button">Login</button> 
            }
            
        </div>
        </> 
    )
}
export default Header;
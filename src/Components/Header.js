import { useState } from "react";
import foodvista_logo from "/public/resources/foodvista_logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedIn = () => {
    //Authenticate
    return false;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
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
                    <Link to="/instamart" className="navlist-link"><li>Instamart</li></Link>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)} className="login-button">Logout</button> : <button onClick={()=>setIsLoggedIn(true)} className="login-button">Login</button> 
            }
            <span className="online-status">{isOnline? "🟢": "⚪"}</span>
            <svg className="person-account" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="person"><path fill="#333" fillRule="evenodd" d="M24 24C28.4204 24 32 20.4204 32 16 32 11.5796 28.4204 8 24 8 19.5796 8 16 11.5796 16 16 16 20.4204 19.5796 24 24 24zM34 16C34 21.525 29.525 26 24 26 18.475 26 14 21.525 14 16 14 10.475 18.475 6 24 6 29.525 6 34 10.475 34 16zM9.22348 34.2119C8.22038 35.0211 8 35.6291 8 36V40H40V36C40 35.6291 39.7796 35.0211 38.7765 34.2119 37.7958 33.4207 36.3341 32.6669 34.5622 32.015 31.0199 30.7117 26.7532 30 24 30 21.2468 30 16.9801 30.7117 13.4378 32.015 11.6659 32.6669 10.2042 33.4207 9.22348 34.2119zM24 28C17.9925 28 6 31.0347 6 36V42H42V36C42 31.0347 30.0075 28 24 28z" clipRule="evenodd"></path></svg>
            
        </div>
        </> 
    )
}
export default Header;
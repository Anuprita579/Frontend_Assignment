import { useState } from "react";
import foodvista_logo from "/public/resources/foodvista_logo.png";

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
                <h1>FoodVista</h1>
            </div>
            <div className="header-right">
                <ul className="navlist">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button> 
            }
            
        </div>
        </> 
    )
}
export default Header;
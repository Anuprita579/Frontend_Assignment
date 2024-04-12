import React from "react";
import foodvista_logo from "/public/resources/foodvista_logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return(
        <>
        <div className="bg-orange-600 flex w-full top-0 left-0 sticky z-50">
            <div className="bg-orange-600 flex items-center pl-5 text-white w-1/2 max-sm:justify-center max-sm:w-1/6">
                <Link to="/"><img src={foodvista_logo} className="h-10 w-10" /></Link>
            </div>
            <div className="bg-orange-600 flex justify-center w-1/2 max-sm:w-full max-md:w-full max-sm:text-sm max-md:text-sm">
                <ul className=" list-none flex justify-evenly items-center font-md text-white w-10/12">
                    <Link to="/" className="no-underline text-white hover:text-slate-300"><li>Home</li></Link>
                    <Link to="/about" className="no-underline text-white hover:text-slate-300"><li>About Us</li></Link>
                    <Link to="/cart" className="no-underline text-white hover:text-slate-300"><li>Cart - {cartItems.length}</li></Link>
                    <Link to="/instamart" className="no-underline text-white hover:text-slate-300"><li>Instamart</li></Link>
                </ul>
                <span className="float-right rounded-full bg-transperant text-sm flex justify-end relative h-6 left-3">{isOnline? "🟢": "⚪"}</span>
                <svg className="float-right rounded-full bg-white border-2 border-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="person"><path fill="#333" fillRule="evenodd" d="M24 24C28.4204 24 32 20.4204 32 16 32 11.5796 28.4204 8 24 8 19.5796 8 16 11.5796 16 16 16 20.4204 19.5796 24 24 24zM34 16C34 21.525 29.525 26 24 26 18.475 26 14 21.525 14 16 14 10.475 18.475 6 24 6 29.525 6 34 10.475 34 16zM9.22348 34.2119C8.22038 35.0211 8 35.6291 8 36V40H40V36C40 35.6291 39.7796 35.0211 38.7765 34.2119 37.7958 33.4207 36.3341 32.6669 34.5622 32.015 31.0199 30.7117 26.7532 30 24 30 21.2468 30 16.9801 30.7117 13.4378 32.015 11.6659 32.6669 10.2042 33.4207 9.22348 34.2119zM24 28C17.9925 28 6 31.0347 6 36V42H42V36C42 31.0347 30.0075 28 24 28z" clipRule="evenodd"></path></svg>
            </div>
            
            
            
        </div>
        </> 
    )
}
export default Header;
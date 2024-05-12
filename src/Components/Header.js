import React, { useState } from "react";
import foodvista_logo from "/public/resources/foodvista_logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
    const [searchText, setSearchText] = useState("");
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return(
        <>
        <div className="bg-blue-400 flex-col w-full top-0 left-0 sticky z-50">
            <div className="bg-white text-black flex justify-center w-full max-sm:w-full max-md:w-full max-sm:text-sm max-md:text-sm">
                <ul className=" list-none flex justify-evenly items-center font-md text-black w-10/12">
                    <Link to="/" className="no-underline"><img src="https://images.thecompanycheck.com/companylogo/AAFIYA_MEDIRETREATS_PRIVATE_LIMITED_435194.webp" className="h-20 w-40"/></Link>
                    <div className="flex items-center justify-center">
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/consultation-23-568195.png?f=webp&w=256" className="h-8 w-8 m-2"/>
                        <div>
                            <h2>Second Medical Opinion</h2>
                            <h2 className="font-bold">Book Consultation</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/contact-us-3891228-3227425.png?f=webp&w=256" className="h-5 w-5 m-2"/>
                        <div>
                            <h2>Call us on</h2>
                            <h2 className="font-bold">9858962222</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/email-1157-826175.png?f=webp&w=256" className="h-5 w-5 m-2"/>
                        <div>
                            <h2>Email us on</h2>
                            <h2 className="font-bold">info@mediretreats.com</h2>
                        </div>
                    </div>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </ul>
            </div>
            <div className="bg-blue-400 flex justify-center w-full max-sm:w-full max-md:w-full max-sm:text-sm max-md:text-sm">
                <ul className=" list-none flex justify-evenly items-center font-md text-white w-10/12">
                    <Link to="/" className="no-underline text-white hover:text-slate-300"><li>Home</li></Link>
                    <Link to="/about" className="no-underline text-white hover:text-slate-300"><li>About Us</li></Link>
                    <Link to="/cart" className="no-underline text-white hover:text-slate-300"><li>Treatments + </li></Link>
                    <Link to="/cart" className="no-underline text-white hover:text-slate-300"><li>Destinations + </li></Link>
                    <Link to="/instamart" className="no-underline text-white hover:text-slate-300"><li>Hospitals</li></Link>
                    <Link to="/instamart" className="no-underline text-white hover:text-slate-300"><li>FAQ</li></Link>
                    <Link to="/instamart" className="no-underline text-white hover:text-slate-300"><li>Blog</li></Link>
                    <Link to="/instamart" className="no-underline text-white hover:text-slate-300"><li>Request A Quote</li></Link>
                    <input className="h-4 w-2/5 p-4 outline-none text-white bg-blue-600" type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    
                </ul>
            </div>
        </div>

        </> 
    )
}
export default Header;
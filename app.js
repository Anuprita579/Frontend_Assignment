import React from "react";
import ReactDOM  from "react-dom/client";
import foodvista_logo from "./public/resources/foodvista_logo.png";

const Header = () => {
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
        </div>
        </> 
    )
}

const fooditem = [
    {
    image: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    name: "KFC",
    cuisine: ["Burger", "American"],
    rating: "4.2"
    },
    {
        image: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
        name: "Burger King",
        cuisine: ["Burger", "American"],
        rating: "4.2"
    },
    {
        image: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
        name: "KFC",
        cuisine: ["Burger", "American"],
        rating: "4.2"
    }
];

const Body = () => {
    return(
        <>
            <div className="food-card">
                <img src={fooditem[0].data?.image} />
                <h2>{fooditem[0].data?.name}</h2>
                <h3>{fooditem[0].data?.cuisine.join(", ")}</h3>
                <h3>{fooditem[0].data?.rating} stars</h3>
            </div>  
        </>
    )
}


const AppLayout = () => {
    return(
        <>
        <Header />
        <div className="food-list">
            <Body res={fooditem[0]}/>
            <Body res={fooditem[0]}/>
            <Body res={fooditem[0]}/>
        </div>
        
        </>
    )
}
const display = ReactDOM.createRoot(document.getElementById("root"));
display.render(<AppLayout />);
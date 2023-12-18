import RestaurantList from "./RestaurantList";
import {fooditem} from "../config";
import { useState } from "react";

function filterData(searchText, restaurantDisplay){
    const filterData = restaurantDisplay.filter((res)=>res.info.name.includes(searchText));
    return filterData;
}

const Body = () => {
    const [restaurantDisplay, setRestaurantDisplay] = useState(fooditem);
    const [searchText, setSearchText] = useState("");
    return(
        <>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="search-btn" onClick={()=>{
                    const data = filterData(searchText, restaurantDisplay);
                    setRestaurantDisplay(data);
                }}>Search</button>
            </div>

            <div className="food-list">
                {
                    restaurantDisplay.map((res) => {
                        return <RestaurantList {...res.info} key={res.info.id}/>
                    })
                }
            </div>
        </>
    )
}
export default Body;
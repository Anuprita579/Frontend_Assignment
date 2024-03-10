import RestaurantList from "./RestaurantList";
import {fooditem} from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link as ReactRouterLink } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchText, restaurantDisplay){
    const filterData = restaurantDisplay.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}

const Body = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isOnline = useOnline();
    

    useEffect(()=>{
        //API call
        getRestaurants();
    }, []);

    async function getRestaurants(){
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2622342&lng=72.9735531&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const json = await data.json();
        //console.log(json);
        //setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurant(fooditem);
        setFilteredRestaurant(fooditem);
    }

    if (!isOnline){
        return(
            <div className='error-page'>
            <div className='error-box'>
                <h1>Offline</h1>
                <h2>Check your internet connection!</h2>
            </div>
        </div>

        )    
    }

    //Early return
    if(!allRestaurant) return null;

    //Not found
    //if(filteredRestaurant?.length === 0) return <h1>Not Found</h1>

    return (allRestaurant?.length === 0)? <Shimmer /> : (
        <>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search for restaurants" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="search-btn" onClick={()=>{
                    const data = filterData(searchText, allRestaurant);
                    setFilteredRestaurant(data);
                }}>Search</button>
            </div>

            <div className="food-list">
                {
                    filteredRestaurant.map((res) => {
                        return (
                        <div className="food-card-click" key={res.info.id}>
                            <ReactRouterLink to={"/restaurant/"+ res.info.id} key={res.info.id}> 
                                <RestaurantList {...res.info} />
                            </ReactRouterLink>
                        </div>
                    )})
                }
            </div>
        </>
    )
}
export default Body;
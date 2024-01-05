import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';

function RestaurantMenu() {
    const {resId} = useParams();

    const [restaurant, setRestaurant]=useState({});
    //const [menu, setMenu] = useState({});
    useEffect(()=>{
        getMenu();
    },[]);

    const getMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2622342&lng=72.9735531&catalog_qa=undefined&submitAction=ENTER&restaurantId="+ resId);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);

        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        //setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };
  return (!restaurant)? <Shimmer /> : (
    <>
        <div className='menu-card'>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
            <div>
                <h2> {restaurant.name}</h2>
                <h3> {restaurant.costForTwoMessage}</h3>
                <h3> {restaurant.city}</h3>
                <h3> {restaurant.avgRating}</h3>
            </div>
        </div>
      
    </>
  )
}

export default RestaurantMenu

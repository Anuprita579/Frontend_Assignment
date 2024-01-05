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
  return (
    <>
        <div>
            <h2> {restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
            <h2> {restaurant.costForTwoMessage}</h2>
            <h2> {restaurant.avgRating}</h2>
            <h2> {restaurant.city}</h2>
        </div>
      
    </>
  )
}

export default RestaurantMenu

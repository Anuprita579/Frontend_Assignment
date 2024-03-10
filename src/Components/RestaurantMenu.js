import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, fooditem } from '../config';
import Shimmer from './Shimmer';

function RestaurantMenu() {
    const {resId} = useParams();

    const [restaurant, setRestaurant]=useState({});
    //const [menu, setMenu] = useState({});
    useEffect(()=>{
        const foundRestaurant = fooditem.find((item) => item.info.id === resId);
        if (foundRestaurant) {
            setRestaurant(foundRestaurant.info);
        }
    },[resId]);

    
  return (!restaurant)? <Shimmer /> : (
    <>
        <div className='menu-card'>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
            <div>
                <h2> {restaurant.name}</h2>
                <h3> {restaurant.costForTwo}</h3>
                <h3> {restaurant.locality}</h3>
                <h3> {restaurant.areaName}</h3>
                <h3> {restaurant.avgRating}</h3>
            </div>
        </div>
      
    </>
  )
}

export default RestaurantMenu

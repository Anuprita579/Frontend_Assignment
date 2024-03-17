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
        <div>
            <div className='flex mt-10 justify-center items-center max-sm:flex-col'>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} className='mr-5 h-40 rounded-xl'/>
                <div>
                    <h2 className='font-bold font-xl'> {restaurant.name}</h2>
                    <h3 className='text-slate-400'> {restaurant.costForTwo}</h3>
                    <h3 className='text-slate-400'> {restaurant.locality}</h3>
                    <h3 className='text-slate-400'> {restaurant.areaName}</h3>
                    <h3 className='text-slate-400'> {restaurant.avgRating}</h3>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                {restaurant.menu?.items.map((menuItem, index)=>{
                    return(
                        <div key={index} className='grid grid-cols-2 gap-6'>
                            <h3>{menuItem.name}</h3>
                            <h3>{menuItem.price}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
      
    </>
  )
}

export default RestaurantMenu

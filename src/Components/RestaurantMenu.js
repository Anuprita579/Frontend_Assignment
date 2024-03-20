import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, fooditem } from '../config';
import Shimmer from './Shimmer';
import { additem, removeItem } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function RestaurantMenu() {
    const {resId} = useParams();

    const [restaurant, setRestaurant]=useState({});
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch();
    useEffect(()=>{
        const foundRestaurant = fooditem.find((item) => item.info.id === resId);
        if (foundRestaurant) {
            setRestaurant(foundRestaurant.info);
        }
    },[resId]);

    const handleAdd = (menuItem) => {
        dispatch(additem(menuItem));
    }
    const handleRemove = (menuItem) => {
        dispatch(removeItem(menuItem))
    }
    
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
            <div className='flex justify-center items-center w-full flex-wrap'>
                {restaurant.menu?.items.map((menuItem, index)=>{
                    const itemInCart = cartItems.find(item => item.id === menuItem.id);
                    const quantity = itemInCart ? itemInCart.quantity : 0;
                    return(
                        <div key={index} className='bg-slate-50 p-4 m-4 w-60 shadow-xl shadow-orange-50 hover:scale-95'>
                            <img src={IMG_CDN_URL+menuItem.id} alt='food' className='h-40 w-full rounded-2xl'/>
                            <h3 className='font-bold'>{menuItem.name}</h3>
                            <h3> &#8377; {menuItem.price}</h3>
                            <div className='flex border-2 border-orange-600 max-w-20'>
                                <button onClick={()=>handleAdd(menuItem)} className='w-7 py-2 bg-orange-600 text-white font-bold'>+</button>
                                <h1 className='p-2'>{quantity}</h1>
                                <button onClick={()=>handleRemove(menuItem)} className='w-7 py-2 bg-orange-600 text-white font-bold'>-</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      
    </>
  )
}

export default RestaurantMenu

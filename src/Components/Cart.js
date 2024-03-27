import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart())
    }
  return (
    <div>
        <h1 className='text-3xl font-bold text-orange-600'>Cart - {cartItems.length}</h1>
        <button onClick={()=>handleClear()} className='h-4 p-4 bg-orange-600 text-white cursor-pointer font-bold flex justify-center items-center border-2 border-orange-600 shadow-lg shadow-orange-200 hover:shadow-none float-right'>Clear Cart</button>
        <div className='flex flex-col justify-center items-center comic-neue' >
            {cartItems.map((items, index)=>{
                return <FoodItem key={index} {...items} quantity={items.quantity}/>
            })}
        </div>

    </div>
    
  )
}

export default Cart

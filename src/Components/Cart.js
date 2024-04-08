import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice'
import EmptyCart from './EmptyCart'
import Bill from './Bill'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart())
    }
    if (cartItems.length === 0) return <EmptyCart />
  return (
    <div>
        <button onClick={()=>handleClear()} className='h-4 p-4 bg-orange-600 text-white cursor-pointer font-bold flex justify-center items-center border-2 border-orange-600 shadow-lg shadow-orange-200 hover:shadow-none float-right mt-2'>Clear Cart</button>
        <br></br>
        <br></br>
        <div className='flex justify-center items-center float-right max-sm:float-none max-md:float-none'><Bill /></div>
        <div className='flex flex-col justify-center items-center comic-neue' >
            {cartItems.map((items, index)=>{
                return <FoodItem key={index} {...items} quantity={items.quantity}/>
            })}
        </div>

    </div>
    
  )
}

export default Cart

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
        <h1>Cart - {cartItems.length}</h1>
        <button onClick={()=>handleClear()}>Clear Cart</button>
        <div className='flex flex-col justify-center items-center' >
            {cartItems.map((items, index)=>{
                return <FoodItem key={index} {...items}/>
            })}
        </div>

    </div>
    
  )
}

export default Cart

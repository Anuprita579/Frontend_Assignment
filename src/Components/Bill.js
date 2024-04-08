import React from 'react'
import { useSelector } from 'react-redux'
const Bill = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    const deliveryCost = 30
    const total = totalCost + deliveryCost
  return (
    <>
        <div className='m-5 p-5 shadow-2xl shadow-orange-100'>
            <h1 className='text-center font-bold text-xl'>Bill</h1>
            <p>Total Items - {cartItems.length}</p>
            <p>Total - &#8377; {totalCost.toFixed(2)}</p>
            <p>Delivery Cost - &#8377; {deliveryCost.toFixed(2)}</p>
            <hr className='m-2'></hr>
            <p className='font-bold'>To Pay - &#8377; {total.toFixed(2)}</p>
            <div className='flex justify-center items-center'>
                <button className='border-2 border-orange-600 p-2 font-bold rounded-xl m-2 hover:bg-orange-600 hover:text-white'> Pay Now</button>
            </div>
            
        </div> 
    </>
  )
}

export default Bill

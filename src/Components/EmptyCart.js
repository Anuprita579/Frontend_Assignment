import React from 'react'
import { IMG_CDN_URL } from '../config'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <img src={IMG_CDN_URL + "2xempty_cart_yfxml0"} alt='emptycart'/>
            <div className='p-10 text-center'>
              <h1 className='font-bold text-xl'>Your cart is empty</h1>
              <h2 className='text-sm text-slate-600'>You can go to home page to view more restaurants</h2>
              <Link to="/"><button className='font-bold p-2 bg-orange-600 text-white m-2'>SEE RESTAURANTS NEAR YOU</button></Link>
            </div>
        </div>
    </>
  )
}

export default EmptyCart

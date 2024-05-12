import React from 'react'

const Banner = () => {
  return (
    <>
        <div className='banner_image flex justify-between align-middle items-center w-full'>
            <div className='w-1/2 pl-40 relative z-10'>
                <h1 className='font-semibold text-white'>Home<span className='text-red-600 font-bold'> &gt; </span>Treatments<span className='text-red-600 font-bold'> &gt; </span>Orthopaedics<span className='text-red-600 font-bold'> &gt; </span>Knee Replacement </h1>
                <h1 className='text-5xl text-white font-bold'>Total Knee Replacement</h1>
                <p className='text-white max-w-1/2'>Total knee replacement is a surgery to remove and replace the whole damaged knee join with artificial joint.</p>
                <button className='bg-blue-400 font-bold p-2 mt-2 text-white'>Enquire Now</button>
            </div>
            <img src='https://aafiyaindia.com/wp-content/uploads/2019/02/knee-center.jpg' className='rounded-l-full border-l-8 border-indigo-800 relative z-10 h-96 w-96'/>
        </div> 
    </>
  )
}

export default Banner

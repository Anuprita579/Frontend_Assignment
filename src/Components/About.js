import React from 'react';
import '../style.css';
import { company_number } from '../config';

const About = () => {
 return (
  <div className='w-full flex flex-col justify-center items-center'>
    {/* Hero Section */}
    <div className='bg-gradient-to-b from-white from-50% to-orange-500 to-50% w-full flex flex-col justify-center items-center'>
      <h1 className='text-7xl p-10 galada'>FoodVista</h1>
      <img src="https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-assortment-basket_23-2148821573.jpg?t=st=1711514324~exp=1711517924~hmac=5fbbeb24d6e981d41ddb3b09ae180fe1a6ed722620c5b0b19f34316fec1a23ba&w=740" alt='food' className='w-96 h-96 object-cover max-sm:w-60 max-md:w-60 max-sm:h-60 max-md:h-60'/>
    </div>
    {/* Section 1*/}
    <div className='flex justify-center items-center max-sm:flex-col max-md:flex-col'>
      <div className='w-1/2 p-20 comic-neue max-sm:w-full max-md:w-full'>
        <h1 className='text-4xl font-bold'>Who are we?</h1>
        <hr className='w-20 border-2 border-orange-600 mb-5'></hr>
        <p className='text-xl'>
        Welcome to FoodVista, your one-stop solution for all your food delivery needs. At FoodVista, we believe that good food should be accessible, convenient, and delivered right to your doorstep. Our mission is to connect you with the best local restaurants and cafes, ensuring that you can enjoy your favorite dishes without the hassle of cooking or navigating busy streets. Our platform is designed with user experience in mind, offering a seamless and enjoyable ordering process. Whether you're craving a quick bite or planning a gourmet dinner, FoodVista makes it easy to find and order from a wide range of cuisines. From fast-food favorites to fine dining experiences, we've got you covered.
        </p>
      </div>
      
      <img src='https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?t=st=1711523911~exp=1711527511~hmac=97708b52cc7215a63c3d4e2c7f6c86cd7e666e24166cc91d55d1dd8331548e61&w=996' className='w-1/2'/>
    </div>
    {/* Section 2 */}
    <div className='flex justify-center items-center max-sm:flex-col max-md:flex-col'>
      <div className='w-40 mx-10'>
        <h1 className='font-mono text-4xl'>Changing <span className='font-bold'>the game</span></h1>
      </div>
      {company_number.map((no, index)=>{
        return(
          <div key={index} className='border-2 border-orange-600 p-2 m-5 rounded-xl w-40 min-h-32 text-center'>
            <h1 className='text-3xl font-bold'>{no.count} +</h1>
            <h1 className='font-thin comic-neue'>{no.title}</h1>
          </div>
        )
      })}
    </div>
    
  </div>
 )
}

export default About;
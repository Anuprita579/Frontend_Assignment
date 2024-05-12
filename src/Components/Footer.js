import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-full bg-cyan-950 py-10'> 
        <div className='flex justify-between gap-20 text-white'>
            <ul className='list-disc'>
                <p className='font-bold py-2'>Important Links</p>
                <li>Home</li>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <ul className='list-disc'>
                <p className='font-bold'>Top Hospitals</p>
                <li>Appolo Hospital Delhi</li>
                <li>Medanta Hospital Gurgoan</li>
                <li>Max Hospital Delhi</li>
                <li>Jaslok Hospital Mumbai</li>
                <li>Artemis Hospital Gurgaon</li>
                <li>Fortis Hospital Gurgaon</li>
                <li>View All</li>
            </ul>
            <ul className='list-disc'>
                <p className='font-bold'>Special Treatment</p>
                <li>Knee Replacement Surgeon</li>
                <li>Urologist</li>
                <li>Spine Surgeon</li>
                <li>ENT Surgeon</li>
                <li>Orthopaedic</li>
                <li>Cardiologist</li>
                <li>View All</li>
            </ul>
            <ul className='list-disc'>
                <p className='font-bold'>Medical Tourism Destination</p>
                <li>Medical Tourism in India</li>
                <li>Medical Tourism in Sri Lanka</li>
                <li>Medical Tourism in UAE</li>
                <li>View All</li>
            </ul>
        </div> 

        <hr className='p-2 w-11/12 mt-5'></hr>

        <div className='w-full py-10'>
            <div className='flex justify-center items-center'>

                <img src='https://aveshkhan.github.io/Aafiya-Mediretreats/image/logo.png' className='w-1/4'/>
                <div className='w-1/2 text-white flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-xl'>About Aafiya MedireTreats</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='w-1/4 text-white text-center flex flex-col justify-center items-center'>
                    <h1>Follow Us On</h1>
                    <div className='flex'>
                        <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/instagram-2752153-2284970.png?f=webp&w=256' className="h-4 w-4 m-2"/>
                        <img src='https://cdn.iconscout.com/icon/free/png-512/free-facebook-262-721949.png?f=webp&w=256' className='h-4 w-4 m-2'/>
                        <img src='https://cdn.iconscout.com/icon/free/png-512/free-youtube-268-721990.png?f=webp&w=256' className='w-4 h-4 m-2'/>
                    </div>
                    <h1>Customer service</h1>
                    <p className='font-bold text-blue-400'>+91 9856555666</p>
                </div>

            </div>
            
        </div>
        </div>
    </>
  )
}

export default Footer

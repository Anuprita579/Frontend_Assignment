import React, { useState } from 'react'
import { instamart_items } from '../config'
const Section = ({title, description, isVisible, setIsVisible}) => {
  return(
    <div className='border-2 border-orange-600 p-4 m-4'>
      <h1 className='font-bold text-xl comic-neue'>{title}</h1>
      {!isVisible ? (
        <button onClick={()=>{setIsVisible(true)}} className='h-4 p-4 bg-orange-600 text-white cursor-pointer font-bold flex justify-center items-center border-2 border-orange-600 shadow-lg shadow-orange-200 hover:shadow-none'>Show</button>
      ):(
        <button onClick={()=>{setIsVisible(false)}} className='h-4 p-4 bg-orange-600 text-white cursor-pointer font-bold flex justify-center items-center border-2 border-orange-600 shadow-lg shadow-orange-200 hover:shadow-none'>Hide</button>
      )}
      
      {isVisible && <h2 className='comic-neue m-2'>{description}</h2>}
      
    </div>
    
  )
}

const InstaMart = () => {
  const [sectionConfig, setSectionConfig] = useState("about");
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {instamart_items.map((item, index)=>{
          return(
            <div className="m-5 p-5 w-60 text-black shadow-2xl shadow-orange-100 hover:scale-105 comic-neue" key={index}>
              <img src={item.image[0]} className="h-40 w-full rounded-xl "/>
              <h2 className="truncate font-bold">{item.name}</h2>
              <p className="truncate"> &#8377; {item.offers.price} </p>
                  
            </div>
          )
        })}
      </div>
      
      <Section title={"About InstaMart"} description={"Instamart is your go-to for grocery delivery, making shopping easy and convenient. We connect you with local stores and offer flexible shopping options."} isVisible={sectionConfig==="about"} setIsVisible={() => setSectionConfig(sectionConfig==="about"? "": "about")}/>
      <Section title={"Team InstaMart"} description={"Our team is a mix of passionate individuals, all working together to make Instamart the best it can be. We value flexibility and a positive work environment."} isVisible={sectionConfig==="team"} 
      setIsVisible={() => setSectionConfig(sectionConfig==="team"? "": "team")}/>
      <Section title={"Carreers"} description={"Join us at Instamart and be part of a team that's changing the grocery shopping experience. We're looking for people who are ready to make a difference and grow with us."} isVisible={sectionConfig==="carreers"} 
      setIsVisible={() => setSectionConfig(sectionConfig==="carreers"?"":"carreers")}/>
      
    </div>
  )
}

export default InstaMart
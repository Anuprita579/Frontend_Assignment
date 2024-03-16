import React, { useState } from 'react'
const Section = ({title, description, isVisible, setIsVisible}) => {
  return(
    <div className='border-2 border-black p-4 m-4'>
      <h1>{title}</h1>
      {!isVisible ? (
        <button onClick={()=>{setIsVisible(true)}}>Show</button>
      ):(
        <button onClick={()=>{setIsVisible(false)}}>Hide</button>
      )}
      
      {isVisible && <h2>{description}</h2>}
      
    </div>
    
  )
}

const InstaMart = () => {
  const [sectionConfig, setSectionConfig] = useState("about");
  return (
    <div>
      <h1>Instamart</h1>
      <p> There are 1000s of compoenents here </p>
      <Section title={"About InstaMart"} description={"This is the section for About Instamart"} isVisible={sectionConfig==="about"} setIsVisible={()=>setSectionConfig("about")}/>
      <Section title={"Team InstaMart"} description={"This is the section for Team Instamart"} isVisible={sectionConfig==="team"} 
      setIsVisible={()=>setSectionConfig("team")}/>
      <Section title={"Carreers"} description={"This is the section for Carreers of Instamart"} isVisible={sectionConfig==="carreers"} 
      setIsVisible={()=>setSectionConfig("carreers")}/>
      
    </div>
  )
}

export default InstaMart

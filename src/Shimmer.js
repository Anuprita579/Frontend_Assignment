import React from 'react'

function Shimmer() {
  return (
    <>
        <div className='food-list'>
          {Array(15).fill("").map((e, index)=>(<div className='shimmer-card' key={index}></div>))}
        </div>
    </>
  )
}

export default Shimmer

import React from 'react'

function Shimmer() {
  return (
    <>
        <div className='flex flex-wrap'>
          {Array(15).fill("").map((e, index)=>(<div className='w-60 bg-slate-200 m-5 p-5 h-60 animate-pulse' key={index}></div>))}
        </div>
    </>
  )
}

export default Shimmer

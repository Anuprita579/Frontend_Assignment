import React from 'react'

const mediInfo = [
    {
        content:"The BMI(Body Mass Index) is 40 or more",
    },
    {
        content:"The BMI is 30 or more with severe weight-related health condition like type-2 diabetes and high blood pressure",
    },
    {
        content:"You are willing to make permanent changes in the lifestyle",
    }
]

const SectionB = ({title}) => {
  return (
    <>
        <div className='flex align-middle items-center justify-center w-full'>
            <div className='w-11/12 flex border-b-2 border-blue-400 py-10'>
                <div className='px-10'>
                    <h2 className='text-xl font-semibold'>{title}<span className='text-red-600'>.</span></h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <br />
                    <ul>
                        {mediInfo.map((info, index)=>{
                            return(
                                <div className='flex items-center' key={index}>
                                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/direction-254-393852.png?f=webp&w=256" className='h-4 w-4 m-2'/> 
                                    <p>{info.content}</p>
                                </div>
                            )
                        })}
                    </ul>

                </div>

            </div>
            
            
        </div>
      
    </>
  )
}

export default SectionB

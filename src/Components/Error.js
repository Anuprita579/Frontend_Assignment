import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err = useRouteError();
  return (
    <>
        <div className='text-center h-screen flex justify-center items-center'>
            <div className='bg-orange-600 rounded-xl shadow-xl shadow-slate-300 text-white p-5 '>
                <h1>OOPS !!</h1>
                <h2>Something went wrong</h2>
                <h2>{err.status + " : " + err.statusText}</h2>
            </div>
        </div>
    </>
  )
}

export default Error

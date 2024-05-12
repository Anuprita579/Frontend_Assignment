import React from 'react'
import { Link } from 'react-router-dom'

const SectionHeader = () => {
  return (
    <>
        <div className="bg-white flex justify-center w-full max-sm:w-full max-md:w-full max-sm:text-sm max-md:text-sm">
                <ul className=" list-none flex justify-evenly items-center font-semibold w-10/12">
                    <li className="no-underline border-b-blue-600 border-b-4 p-4 cursor-pointer">Overview</li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">Eligibility</li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">Preparation </li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">About Treatment </li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">Post-Treatment Care </li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">Recovery Tips</li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">FAQs</li>
                    <li className="no-underline hover:border-b-blue-600 hover:border-b-4 p-4 hover:cursor-pointer">Patient Stories</li>
                </ul>
            </div>
      
    </>
  )
}

export default SectionHeader

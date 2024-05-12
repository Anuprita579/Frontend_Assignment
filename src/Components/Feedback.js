import React, { useState } from 'react'

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
  return (
    <>
        <div className='flex flex-col justify-center items-center w-full'>
            <form className='flex flex-col border-2 border-slate-200 shadow-xl shadow-slate-200 rounded-xl p-4 m-4'>
                <h2 className='font-semibold text-2xl text-blue-400'>Need Help ?</h2>
                <p className='text-slate-400'>Just let us know. We will be happy to assist you.</p>
                <input placeholder='Full Name' type='text' onChange={(e)=>setName(e.target.value)} className='p-2 m-2 outline-none border-2 border-slate-200'/>
                <input placeholder='Email' type='text' onChange={(e)=>setEmail(e.target.value)} className='p-2 m-2 outline-none border-2 border-slate-200'/>
                <input placeholder='Phone Number' type='text' onChange={(e)=>setPhone(e.target.value)} className='p-2 m-2 outline-none border-2 border-slate-200'/>
                <textarea placeholder='Describe your treatment requirement' type="text" onChange={(e)=>setText(e.target.value)} className='p-2 m-2 outline-none border-2 border-slate-200'></textarea>
                <button type='submit' className='p-2 m-2 bg-blue-400 text-white'>Send Enquiry</button>
            </form>
        </div>
      
    </>
  )
}

export default Feedback

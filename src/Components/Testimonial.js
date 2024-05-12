import React from 'react';

const testimonials = [
    {
        id: "person01",
        name: "Luke Olfert",
        location: "New York, USA",
        person_img_url: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        content:(<iframe src='https://www.youtube.com/embed/74DWwSxsVSs' controls> </iframe>),
        title: "Underwent procedure for retinal detachment"
    },
    {
        id: "person02",
        name: "John Doe",
        location: "Sydney, Australia",
        person_img_url: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        content:(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>),
        title: "Underwent Colonoscopy and Medical Management",
    }
];


function Testimonial() {
  return (
    <>
    <div className='w-full flex justify-center items-center'>
        <div className='w-11/12 py-10'>
            <h2 className='text-xl font-semibold'>Patient Stories & Videos<span className='text-red-600'>.</span></h2>
            <div className='flex items-center px-4 max-lg:flex-col'>
                {testimonials.map((test)=>{
                    return(
                        <div key={test.id} className='max-w-96 border-2 border-slate-200 m-5 p-5'>
                            <div className='flex justify-center items-center'>
                                <h1 className='font-semibold '>{test.title}</h1>
                                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/quotes-2113375-1781184.png?f=webp&w=256" className='w-1/4 '/>
                            </div>
                            
                            <div className='min-h-60 text-sm font-semibold text-slate-400'>{test.content}</div>
                            <div className='flex items-center'>
                                <img src={test.person_img_url} alt="person" className='h-10 w-10 m-2 rounded-full'/>
                                <div>
                                    <h1 className='font-semibold'>{test.name}</h1>
                                    <h2 className='text-slate-400 text-sm'>{test.location}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    </div>
        
        
        
    </>
  )
}

export default Testimonial
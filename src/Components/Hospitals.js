import React, { useState, useEffect } from 'react';

const images = [
    {
        id: "img01",
        img_url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsfGVufDB8fDB8fHww",
        name:"Appolo Hospital",
        location: "Bangalore"
    },
    {
        id: "img02",
        img_url: "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        name:"Medanta Hospital",
        location: "Gurgaon"
    },
    {
        id: "img03",
        img_url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        name:"Jaslok Hospital",
        location: "Mumbai"
    },
    {
        id: "img04",
        img_url: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
        name:"Jupiter Hospital",
        location: "Mumbai"
    },
];


function Hospitals() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length / 2) % (images.length / 2));
    };

    const nextSlide = () => {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % (images.length / 2));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => {
            clearInterval(timer);
        };
    }, [currentImageIndex]);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <div className='py-10 flex flex-col justify-center items-center'>
                <h1 className='text-xl font-semibold italic text-red-400'>Hospitals</h1>
                <h1 className='text-2xl font-semibold'>Recommended <span className='text-blue-400'>Hospitals</span></h1>
                <div className='flex items-center justify-center'>
                    <div className='w-96 m-2 border-2 border-red-400 flex flex-col justify-center items-center'>
                        <img src={images[currentImageIndex * 2].img_url} alt="weddingimage" className='w-full h-60'></img>
                        <p className='text-xl font-semibold '>{images[currentImageIndex * 2].name}</p>
                        <p className='font-semibold italic text-red-400'>{images[currentImageIndex * 2].location}</p>
                    </div>
                    <div className='w-96 m-2 border-2 border-red-400 flex flex-col justify-center items-center'>
                        <img src={images[(currentImageIndex * 2) + 1].img_url} alt="weddingimage" className='w-full h-60'></img>
                        <p className='text-xl font-semibold'>{images[(currentImageIndex * 2) + 1].name}</p>
                        <p className='font-semibold italic text-red-400'>{images[(currentImageIndex * 2) + 1].location}</p>
                    </div>
                </div>

                {/* Dots */}
                <div className='flex justify-center mt-5'>
                    {[...Array(Math.ceil(images.length / 2))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2 w-2 rounded-full mx-1 ${index === Math.floor(currentImageIndex)? 'bg-blue-400' : 'bg-slate-400'}`}
                        ></button>
                    ))}
                </div>

                <p className='py-5 font-semibold'>Don't hesitate, contact us for better help and services. <span className="text-red-400 underline cursor-pointer">Explore all hospitals</span></p>

            </div>
            
        </>
    );
}

export default Hospitals;

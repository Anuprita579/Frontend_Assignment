import React, { useState, useEffect } from 'react';

const images = [
    {
        id: "img01",
        img_url: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        name:"Dr. Faique Falke",
        hospital: "Mussafah Industrial - Abu Dhabi",
        achievement: "Doctor degree & Specialist",
    },
    {
        id: "img02",
        img_url: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        name:"Dr. Faique Falke",
        hospital: "Mussafah Industrial - Abu Dhabi",
        achievement: "Doctor degree & Specialist",
    },
    {
        id: "img03",
        img_url: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        name:"Dr. Faique Falke",
        hospital: "Mussafah Industrial - Abu Dhabi",
        achievement: "Doctor degree & Specialist",
    },
    {
        id: "img04",
        img_url: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        name:"Dr. Faique Falke",
        hospital: "Mussafah Industrial - Abu Dhabi",
        achievement: "Doctor degree & Specialist"
    },
];


function Doctors() {
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
            <div className='bg-slate-200 py-10 flex flex-col justify-center items-center'>
                <h1 className='text-xl font-semibold italic text-red-400'>Doctors</h1>
                <h1 className='text-2xl font-semibold'>Top Orthopaedic <span className='text-blue-400'>Doctors</span></h1>
                <div className='flex items-center justify-center'>
                    <div className='w-96 p-2 m-2 bg-white flex flex-col justify-center items-center'>
                        <img src={images[currentImageIndex * 2].img_url} alt="weddingimage" className='w-full'></img>
                        <p className='text-xl font-semibold italic text-red-400'>{images[currentImageIndex * 2].name}</p>
                        <p className='font-semibold'>{images[currentImageIndex * 2].hospital}</p>
                        <p className='text-slate-400 font-semibold text-sm'>{images[currentImageIndex * 2].achievement}</p>
                    </div>
                    <div className='w-96 p-2 m-2 bg-white flex flex-col justify-center items-center'>
                        <img src={images[(currentImageIndex * 2) + 1].img_url} alt="weddingimage" ></img>
                        <p className='text-xl font-semibold italic text-red-400'>{images[(currentImageIndex * 2) + 1].name}</p>
                        <p className='font-semibold'>{images[(currentImageIndex * 2) + 1].hospital}</p>
                        <p className='text-slate-400 font-semibold text-sm'>{images[(currentImageIndex * 2) + 1].achievement}</p>
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

            </div>
            
        </>
    );
}

export default Doctors;

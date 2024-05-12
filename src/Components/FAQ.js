import { color } from 'framer-motion';
import React, { useState } from 'react';

const items = [
    { 
        title: 'How do I know the clinic I am sarching is verified?', 
        content: "Every clinic registered with us are verified." 
    },
    { 
        title: "I can't travel alone so can some family memeber or friend of mine accompany me?", 
        content: "Yes, sure. We have made seating arrangements for friends and family as well." 
    },
    { 
        title: 'Can I see my doctor before I decide and what about my post recovery?', 
        content: "Yes, pre and post treatment consulation can be done. You can speak to the doctor at the most appropriate time (before you decide to travel) to boost your connfidence. The team of Mediretreats will also help you with arranging the OPD's after the surgeries." 
    },
    { 
        title: 'How do I share my reports and medical cases with the clinic of my choice?', 
        content: "You have a choice to select your clinic of your choice or you can even choose our clinic for reports and medical cases." 
    }
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const onItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col justify-center w-full items-center'>
            <div className='w-11/12 border-b-2 border-blue-400 py-10'>

                <h2 className='text-xl font-semibold'>Treatment FAQ<span className='text-red-600'>.</span></h2>
                <br />
                {items.map((item, index) => (
                    <div key={index} className='mb-2 w-2/3'>
                        <div onClick={() => onItemClick(index)} className='cursor-pointer p-2 border-y-2 border-slate-200 flex w-full' >
                            <h1 className='text-right transition-transform duration-500 text-blue-400 mx-2 font-bold'>{activeIndex === index? '-' : '+'}</h1>
                            <h1 className='text-left w-full font-semibold'> {item.title} </h1>
                        </div>
                        {activeIndex === index && (
                            <div className='p-4 ml-5 text-left border-y-2' style={{borderColor: activeIndex === index? '#60a5fa' : 'transparent'}}>
                                <div className='border-l-2 border-l-blue-600 text-slate-600 pl-3' > {item.content} </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
            
        </div>
    );
}

export default FAQ;
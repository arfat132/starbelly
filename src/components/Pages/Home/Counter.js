import React from 'react';
import CountUp from 'react-countup';
import { GiMeal } from 'react-icons/gi';
import { GiSlicedBread } from 'react-icons/gi';
import { GiChickenOven } from 'react-icons/gi';
import { MdOutlineDinnerDining } from 'react-icons/md';

const Counter = () => {
    return (
        <div className="hero my-10 lg:py-0 py-28 h-full lg:h-[450px] bg-[url(https://i.ibb.co/KrwghrH/cc.png)] lg:bg-[url(https://i.ibb.co/tP5dvP4/footer1.png)] md:bg-[url(https://i.ibb.co/tP5dvP4/footer1.png)]">
            <div className="flex flex-wrap text-center m-4 lg:m-6 w-full text-white">
                <div className="lg:w-1/4 sm:w-1/4 w-1/2 mb-8 lg:mb-0 md:mb-0">
                    <GiMeal className='text-white text-8xl mx-auto border-2 border-white rounded-full bg-red-700 px-4 py-4' />
                    <h2 className="title-font font-medium sm:text-4xl text-2xl  mt-3"><CountUp end={234} />+</h2>
                    <p className="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Menu</p>
                </div>
                <div className="lg:w-1/4 sm:w-1/4 w-1/2">
                    <GiSlicedBread className='text-white text-8xl mx-auto border-2 border-white rounded-full bg-red-700 px-4 py-4' />
                    <h2 className="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={542} />+</h2>
                    <p className="font-mono text-center font-bold text-xl lg:text-3xl">Breakfast</p>
                </div>
                <div className="lg:w-1/4 sm:w-1/4 w-1/2">
                    <GiChickenOven className='text-white text-8xl mx-auto border-2 border-white rounded-full bg-red-700 px-4 py-4' />
                    <h2 className="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={344} />+</h2>
                    <p className="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Lunch</p>
                </div>
                <div className="lg:w-1/4 sm:w-1/4 w-1/2">
                    <MdOutlineDinnerDining className='text-white text-8xl mx-auto border-2 border-white rounded-full bg-red-700 px-4 py-4' />
                    <h2 className="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={657} />+</h2>
                    <p className="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Dinner</p>
                </div>

            </div>
        </div>

    );
};

export default Counter;

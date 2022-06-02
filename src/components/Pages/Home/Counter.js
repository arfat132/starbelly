import React from 'react';
import CountUp from 'react-countup';
import { GiMeal } from 'react-icons/gi';
import { GiSlicedBread } from 'react-icons/gi';
import { GiChickenOven } from 'react-icons/gi';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { MdOutlineSetMeal } from 'react-icons/md';

const Counter = () => {
    return (
        <div class="hero my-10 h-full lg:h-[450px] bg-[url(https://i.ibb.co/tP5dvP4/footer1.png)]">
            <div class="flex flex-wrap text-center m-0 lg:m-6 w-full text-white">
                <div class="lg:w-1/5 w-full lg:p-24 px-36 py-10 lg:py-0 text-center">
                    <div className='bg-red-700 py-6 border-2 border-white rounded-full'>
                        <GiMeal className='text-white text-6xl mx-auto' />
                    </div>
                    <h2 class="title-font font-medium sm:text-4xl text-2xl  mt-3"><CountUp end={234} />+</h2>
                    <p class="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Menu</p>
                </div>
                <div class="lg:w-1/5 w-full lg:p-24 px-36 py-10 lg:py-0 text-center">
                    <div className='bg-red-700 py-6 border-2 border-white rounded-full'>
                        <GiSlicedBread className='text-white text-6xl mx-auto' />
                    </div>
                    <h2 class="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={542} />+</h2>
                    <p class="font-mono text-center font-bold text-xl lg:text-3xl">Breakfast</p>
                </div>
                <div class="w-full lg:p-24 px-36 lg:w-1/5 py-10 lg:py-0">
                    <div className='bg-red-700 py-6 border-2 border-white rounded-full'>
                        <GiChickenOven className='text-white text-6xl mx-auto' />
                    </div>
                    <h2 class="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={344} />+</h2>
                    <p class="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Lunch</p>
                </div>
                <div class="w-full lg:p-24 px-36 py-10 lg:py-0 lg:w-1/5">
                    <div className='bg-red-700 py-6 border-2 border-white rounded-full'>
                        <MdOutlineDinnerDining className='text-white text-6xl mx-auto' />
                    </div>
                    <h2 class="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={657} />+</h2>
                    <p class="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Dinner</p>
                </div>
                <div class="w-full lg:p-24 px-36 lg:w-1/5 py-10 lg:py-0">
                    <div className='bg-red-700 py-6  rounded-full'>
                        <MdOutlineSetMeal className='text-white text-6xl mx-auto' />
                    </div>
                    <h2 class="title-font font-medium sm:text-4xl text-2xl mt-3"><CountUp end={757} />+</h2>
                    <p class="leading-relaxed font-mono font-bold text-xl lg:text-3xl">Fish</p>
                </div>
            </div>
        </div>

    );
};

export default Counter;

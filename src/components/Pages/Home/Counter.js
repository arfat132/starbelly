import React from 'react';
import CountUp from 'react-countup';
import cap from '../../Assests/icons/meals.png';
import breakfast from '../../Assests/icons/breakfast.png';
import lunch from '../../Assests/icons/lunch.png';
import dinner from '../../Assests/icons/dinner.png';

const Counter = () => {
    return (
        <section class="text-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap text-center">
                    <div class="p-4 sm:w-1/4 w-1/1 -mt-16">
                        <img className='w-48 mx-auto mb-2 ' src={cap} alt="" srcSet="" />
                        <p class="leading-relaxed font-mono font-bold text-3xl">Menu</p>
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-red-700"><CountUp end={234} />k+</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/1 justify-center">
                        <img className='w-48 mx-auto  justify-center' src={breakfast} alt="" srcSet="" />
                        <p class="leading-relaxed font-mono font-bold text-3xl">Breakfast</p>
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-red-700"><CountUp end={542} />k+</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/1">
                        <img className='w-48 mx-auto  justify-center' src={lunch} alt="" srcSet="" />
                        <p class="leading-relaxed font-mono font-bold text-3xl">Lunch</p>
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-red-700"><CountUp end={344} />k+</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/1">
                        <img className='w-48 mx-auto  justify-center' src={dinner} alt="" srcSet="" />
                        <p class="leading-relaxed font-mono font-bold text-3xl">Dinner</p>
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-red-700"><CountUp end={657} />k+</h2>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;

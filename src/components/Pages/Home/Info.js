import React from 'react';
import foodBusket from '../../Assests/icons/foodBusket.png';
import timer from '../../Assests/icons/timer.png';
import chef from '../../Assests/icons/chef.png';
import food from '../../Assests/icons/food.png';

const Info = () => {
    return (
        <section class="text-gray-900 body-font px-12">
            <div class="container px-5 pb-20 mx-auto">
                <div class="flex flex-wrap text-center font-mono">
                    <div class="p-4 sm:w-1/4 w-1/1">
                        <img className='w-24 h-24  mx-auto mb-2' src={foodBusket} alt="" srcSet="" />
                        <h2 class="title-font font-medium sm:text-4xl text-lg text-red-700 mb-2">Best Quality</h2>
                        <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, possimus.</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/1 justify-center">
                        <img className='w-24 h-24  mx-auto  justify-center mb-2' src={timer} alt="" srcSet="" />
                        <h2 class="title-font font-medium sm:text-4xl text-lg mb-2 text-red-700">On Time</h2>
                        <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tenetur.</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/1">
                        <img className='w-24 h-24  mx-auto  justify-center mb-2' src={chef} alt="" srcSet="" />
                        <h2 class="title-font font-medium sm:text-4xl text-lg mb-2 text-red-700">MasterChefs</h2>
                        <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsum.</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/1">
                        <img className='w-24 h-24 mx-auto  justify-center mb-2' src={food} alt="" srcSet="" />
                        <h2 class="title-font font-medium sm:text-4xl text-lg mb-2 text-red-700">Taste Food</h2>
                        <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, provident?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
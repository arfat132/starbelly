import React from 'react';
import vegetables from '../../Assests/icons/vegetables.png';
import spoons from '../../Assests/icons/spoons.png'
import chefCap from '../../Assests/icons/chefCap.png'
const MakesSpecial = () => {
    return (
        <section class="text-gray-700 body-font px-12">
            <div class="container mx-auto px-5 mb-16 grid lg:grid-cols-2 sm:grid-cols-1 my-6 items-center gap-5">
                <div>
                    <h1 className='font-mono font-bold text-4xl pl-3 mb-5'>What Makes Our Menus Special ?</h1>
                    <div className="flex items-center font-mono md:w-1/1 mx-auto mb-5">
                        <div className=''>
                            <img className="w-40 object-cover object-center " src={vegetables} alt="" />
                        </div>
                        <div className="pl-2">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-90 mb-1 text-red-700 flex justify-between">Pure Ingredients</h5>
                            <p className='sm:text-[8px] lg:text-[14px]'>Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.</p>
                        </div>
                    </div>
                    <div className="flex items-center font-mono md:w-1/1 mx-auto mb-5">
                        <div className=''>
                            <img className="lg:w-28 sm:w-48 object-cover object-center mx-auto " src={spoons} alt="" />
                        </div>
                        <div className="lg:pl-14 sm:pl-20">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-90 mb-1 text-red-700 flex justify-between">Sustainability</h5>
                            <p className='sm:text-[8px] lg:text-[14px]'>Laculis eu non diam phasellus. Dictum non consectetur a erat nam at. Quam adipiscing vitae proin sagittis.</p>
                        </div>
                    </div>
                    <div className="flex items-center font-mono md:w-1/1 mx-auto mb-5">
                        <div className=''>
                            <img className="lg:w-36 sm:w-48  object-cover object-center " src={chefCap} alt="" />
                        </div>
                        <div className="pl-6">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-90 mb-1 text-red-700 flex justify-between">Environmentalism</h5>
                            <p className='sm:text-[8px] lg:text-[14px]'>Bibendum est ultricies integer quis auctor elit sed. Accumsan tortor posuere ac ut consequat semper.</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <img class="mx-auto pl-10" alt="hero" src="https://i.ibb.co/pdDpsYc/bqq.png" />
                </div>
            </div>
        </section>
    );
};

export default MakesSpecial;
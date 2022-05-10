import React from 'react';

const Food = ({ selectedFood }) => {
    const { name, img, price, ratings } = selectedFood;
    return (
        <div className="p-4 md:w-1/4 font-mono ">
            <div className="h-full border-2 bg-gray-50 border-gray-200 border-opacity-60 overflow-hidden hover:border-2 hover:border-red-700 hover:shadow-xl">
                <img className="w-full object-cover object-center h-60 " src={img} alt="blog" />

                <div className="p-6">
                    <span className="text-yellow-400 text-xl font-semibold py-2 roundedml-3 capitalize text-shadow-md">{ratings}</span>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">{name}</h5>
                    <div className='flex font-bold items-center my-3'>
                        <hr className='border-red-700 h-px w-full mr-2 mt-1' />
                        <span className='text-2xl text-red-700'>◈</span>
                        <hr className='border-red-700 h-px w-full ml-2 mt-1' />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-medium text-gray-900">${price}</span>
                        <button className='bg-red-700 text-white uppercase px-4 py-2 font-bold'>Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Food;
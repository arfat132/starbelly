import React from 'react';

const MenuItem = ({ menuItem }) => {
    const { name, img, description, price } = menuItem
    return (
        <div>
            <div className="flex items-center font-mono md:w-1/1 h-24 mx-auto lg:ml-14 sm:ml-0">
                <div className=''>
                    <img className="w-24 object-cover object-center " src={img} alt="" />
                </div>
                <div className="lg:pl-4">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-90 mb-1 text-red-700 flex justify-between">{name} <span className="text-xl font-bold text-gray-900">${price}</span></h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
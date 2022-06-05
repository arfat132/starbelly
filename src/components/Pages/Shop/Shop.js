import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <div>
                <div className="drawer drawer-mobile pt-28 ">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="content">
                            <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-50 text-base-content">
                            <li className='font-medium text-xl bg-red-700 px-2 py-1 text-white mb-2'>Category</li>
                            <li className='text-md -mb-3'><Link to="/shop">All Dishes</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/arabian">Arabian</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/chinese">Chainese</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/italian">Italian</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop/thai">Thai</Link></li>
                            <li className='font-medium text-lg bg-red-700 px-2 py-1 text-white my-5'>Shop By Price</li>
                            <div className='grid grid-cols-2'>
                                <button className='border border-red-700 p-1 w-50 mb-1'><Link to="/shop/oneToHundred">$1 - $100</Link></button>
                                <button className='border border-red-700 p-1 w-50 ml-1 mb-1'><Link to="/shop/hundredToThreeHundred">$100 - $300</Link></button>
                                <button className='border border-red-700 p-1 w-50'><Link to="/shop/threeHundredToFiveHundred">$300 - $500</Link></button>
                                <button className='border border-red-700 p-1 w-50 ml-1'><Link to="/shop/fiveHundredToThousand">$500 - $1000</Link></button>
                            </div>
                            <li className='font-medium text-lg bg-red-700 px-2 py-1 text-white my-5'>Shop By Meat</li>
                            <div className='grid grid-cols-2'>
                                <button className='border border-red-700 p-1 w-50 mb-1'><Link to="/shop/chicken">Chicken</Link></button>
                                <button className='border border-red-700 p-1 w-50 ml-1 mb-1'><Link to="/shop/pasta">Pasta</Link></button>
                                <button className='border border-red-700 p-1 w-50'><Link to="/shop/fish">Fish</Link></button>
                                <button className='border border-red-700 p-1 w-50 ml-1'><Link to="/shop/seafood">Seafood</Link></button>
                                <button className='border border-red-700 p-1 w-50 mt-1'><Link to="/shop/vegetables">Vegetables</Link></button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
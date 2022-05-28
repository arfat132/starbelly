import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <div>
                <div className="drawer drawer-mobile z-0 pt-20 ">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className='flex justify-end bg-gray-200 bg-opacity-60 mt-4 px-4 py-3'>
                            <p className='flex items-center text-gray-500'>Sort by<select class="py-2 px-2 ml-3 bg-red-700 text-white hover:border-none rounded-none">
                                <option>Featured</option>
                                <option><Link to="/shop/lowtohigh">Low to high</Link></option>
                                <option>Hight to Low</option>
                            </select></p>
                        </div>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

                        <ul className="menu p-4 overflow-y-auto w-50 text-base-content">
                            <li className='font-medium text-xl bg-red-700 px-2 py-1 text-white mb-2'>Category</li>
                            <li className='text-md -mb-3'><Link to="/shop">Thai Dishes</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop">Indian Dishes</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop">Indian Dishes</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop">Indian Dishes</Link></li>
                            <li className='text-md -mb-3'><Link to="/shop">Indian Dishes</Link></li>

                            <li className='font-medium text-lg bg-red-700 px-2 py-1 text-white my-5'>Shop By Price</li>
                            <div className='grid grid-cols-2'>
                                <button className='border border-red-700 p-1 w-50 mb-1'>$100 - $200</button>
                                <button className='border border-red-700 p-1 w-50 ml-1 mb-1'>$300 - $400</button>
                                <button className='border border-red-700 p-1 w-50'>$500 - $600</button>
                                <button className='border border-red-700 p-1 w-50 ml-1'>$700 - $800</button>
                            </div>

                            <li className='font-medium text-lg bg-red-700 px-2 py-1 text-white my-5'>Shop By Meat</li>
                            <div className='grid grid-cols-2'>
                                <button className='border border-red-700 p-1 w-50 mb-1'>Chicken</button>
                                <button className='border border-red-700 p-1 w-50 ml-1 mb-1'>Beef</button>
                                <button className='border border-red-700 p-1 w-50'>Fish</button>
                                <button className='border border-red-700 p-1 w-50 ml-1'>Egg</button>
                                <button className='border border-red-700 p-1 w-50 mt-1'>Vegetable</button>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
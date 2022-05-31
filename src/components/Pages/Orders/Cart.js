import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ food }) => {
    const { _id, name, img, price, ratings, quantity, category } = food;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/menuDetails/${id}`);
    }
    return (
        <div className="p-4 m-6 sm:block lg:flex items-center mb-5 font-mono md:w-1/1 h-46 border-2 bg-gray-50 border-gray-200 border-opacity-60 overflow-hidden hover:border-2 hover:border-red-700 hover:shadow-xl">
            <div className=''>
                <img className="w-full object-cover object-center " src={img} alt="" />
            </div>

            <div className="pl-6 w-full">
                <span className="text-yellow-400 text-xl font-semibold py-2 roundedml-3 capitalize text-shadow-md">{ratings}</span>
                <h5 className="text-xl font-semibold tracking-tight text-gray-90 mb-1">{name}</h5>
                <p className='mb-2'>{category}</p>
                <span className="text-xl font-bold text-gray-900">${price}</span>
                <div className='mx-auto my-4'>
                    <button  className='bg-red-700 px-4 py-1 border border-red-700 text-white'>-</button>
                    <button className='px-4 py-0.5 border border-red-700 font-medium text-lg mt-1'>{quantity}</button>
                    <button className='bg-red-700 px-4 py-1 border border-red-700 text-white'>+</button>
                </div>
                <div className='flex justify-between items-center'>
                <p className='font-bold text-lg'>Total: ${price * quantity}</p>
                <button onClick={() => navigateToDetails(_id)} className='bg-red-700 text-white uppercase px-4 py-2 font-bold'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
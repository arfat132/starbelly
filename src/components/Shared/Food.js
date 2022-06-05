import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import { addToDb } from '../Pages/Orders/Utilities/AddToDb';
import { GrCart } from 'react-icons/gr';
const Food = ({ selectedFood }) => {
    const { _id, name, img, price, ratings } = selectedFood;
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const navigateToDetails = id => {
        navigate(`/menuDetails/${id}`);
    }
    const handleAddToCart = (selectedFood) => {
        console.log(selectedFood);
        let newCart = [];
        const exists = cart.find(food => food._id === selectedFood._id);
        if (!exists) {
            selectedFood.quantity = 1;
            newCart = [...cart, selectedFood];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedFood._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedFood._id);
    }
    return (
        <div className="p-4 lg:w-1/4 md:w-2/4  font-mono text-center">
            <div className="h-full border-2 bg-gray-50 border-gray-200 border-opacity-60 overflow-hidden hover:border-2 hover:border-red-700 hover:shadow-xl">
                <img className="w-full object-cover object-center h-60 " src={img} alt="blog" />

                <div className="p-2">
                    <span className="text-yellow-400 text-xl font-semibold py-2 roundedml-3 capitalize text-shadow-md">{ratings}</span>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-1 capitalize">{name}</h5>
                    <span className="text-xl font-medium text-gray-900">${price}.00</span>
                    <div className='flex font-bold items-center my-3'>
                        <hr className='border-red-700 h-px w-full mr-2 mt-1' />
                        <span className='text-2xl text-red-700'>◈</span>
                        <hr className='border-red-700 h-px w-full ml-2 mt-1' />
                    </div>
                    <div className="flex justify-between items-center">
                        <button onClick={() => navigateToDetails(_id)} className='bg-red-700 text-white uppercase px-4 py-2 font-bold'>Details</button>
                        <button onClick={() => handleAddToCart(selectedFood)} className="text-2xl"><GrCart /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Food;
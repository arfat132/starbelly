import React from 'react';
import useCart from '../../../Hooks/useCart';
import Cart from '../../Orders/Cart';
import { removeFromDb } from '../../Orders/Utilities/AddToDb';
import CheckoutPayment from './CheckoutPayment';


const Checkout = () => {
    const [cart, setCart] = useCart();
    const handleRemoveFood = food => {
        const rest = cart.filter(pd => pd._id !== food._id);
        setCart(rest);
        removeFromDb(food._id);
    }
    return (
        <div className='px-4 lg:px-20 grid lg:grid-cols-3 grid-cols-1'>
            <div className="lg:col-span-2 col-span-1">
                <h1 className='font-bold text-2xl ml-0 lg:ml-5 mb-4'>Your Cart</h1>
                {
                    cart.map(food => <Cart
                        key={food._id}
                        food={food}
                        handleRemoveFood={handleRemoveFood}
                    ></Cart>)
                }
            </div>
            <div className=''>
                <h1 className='font-bold text-2xl ml-5'>Order Summary</h1>
               <CheckoutPayment cart={cart}></CheckoutPayment>
            </div>
        </div>
   
    );
};

export default Checkout;
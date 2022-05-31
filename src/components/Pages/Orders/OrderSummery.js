import React from 'react';
import { useNavigate } from 'react-router-dom';


const OrderSummery = ({ cart }) => {
    const navigate = useNavigate();
    console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='p-4'>
            <div className='text-gray-700'>
                <p className='text-[16px] font-medium flex justify-between mb-2'>Quantity <span>{quantity}</span></p>
                <p className='text-[16px] font-medium flex justify-between mb-2'>SubTotal <span>{total}</span></p>
                <p className='my-6 text-[16px] '>Shipping, taxes, and discounts will be calculated at checkout.</p>
                <button onClick={()=>navigate('/orderProcessing/checkout')} className='bg-red-700 w-full py-2 uppercase text-white mb-3'>Procced to checkout</button>
            </div>
        </div>
    );
};

export default OrderSummery;
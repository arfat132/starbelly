import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const PaymentDetails = () => {
    const navigate = useNavigate();
    const [cart] = useCart()
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
                <p className='text-[16px] font-medium flex justify-between mb-3'>Quantity <span>${quantity}</span></p>
                <p className='text-[16px] font-medium flex justify-between mb-3'>SubTotal <span>${total}</span></p>
                <p className='text-[16px] font-medium flex justify-between mb-3'>Shipping <span>${shipping}</span></p>
                <p className='text-[16px] font-medium flex justify-between mb-3'>Tax 10% <span>${tax}</span></p>
                <hr className='my-5' />
                <p className='text-[16px] font-bold flex justify-between mb-7'>Total <span>${grandTotal}</span></p>
                <button onClick={()=>navigate('/orderProcessing/payment')} className='bg-red-700 w-full py-2.5 uppercase text-white mb-3'>Procced to Payment</button>
            </div>
        </div>
    );
};

export default PaymentDetails;
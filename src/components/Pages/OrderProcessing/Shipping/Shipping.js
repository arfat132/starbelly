import React from 'react';
import { useForm } from 'react-hook-form';
import PaymentDetails from './PaymentDetails';
const Shipping = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='lg:px-20 px-4 grid grid-cols-1 lg:grid-cols-7'>
            <form onSubmit={handleSubmit(onSubmit)} className="col-span-4 p-10">
                <h1 className='text-gray-600 font-semibold text-lg mb-5'>Shipping Address</h1>
                <div className='flex flex-wrap w-full'>
                    <div className='w-1/2 pr-2'>
                        <input
                            className="mb-2 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                            placeholder='First Name'
                            {...register("firstName", { required: true })} />
                        <p className='text-red-500'>{errors.firstName?.type === 'required' && "First name is required"}</p>
                    </div>
                    <div className='w-1/2 pl-2 mb-2'>
                        <input
                            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                            placeholder='Last Name'
                            {...register("lastName", { required: true })} />
                         <p className='text-red-500'>{errors.firstName?.type === 'required' && "First name is required"}</p>
                    </div>
                </div>

                <input
                    type='text'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                    placeholder='Address'
                    {...register("address", { required: true })} />
                <label className="label">
                <p className='text-red-500'>{errors.address?.type === 'required' && "Address is required"}</p>
                </label>
                <div >
                    <input
                        placeholder="Apartment No"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        type='text'
                        {...register("apartment", { required: true })}
                    />
                    <label className="label">
                    <p className='text-red-500'>{errors.apartment?.type === 'required' && "Apartment No is required"}</p>
                    </label>
                </div>
                <div className='flex flex-wrap w-full'>
                    <div className='w-1/2 mb-5  pr-2'>
                        <input
                            className="mb-2 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                            placeholder='City'
                            {...register("city", { required: true })} />
                        <p className='text-red-500'>{errors.city?.type === 'required' && "City is required"}</p>
                    </div>
                    <div className='w-1/2 pl-2 mb-5'>
                        <input
                            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                            placeholder='Zip Code'
                            {...register("zipCode", { required: true })} />
                         <p className='text-red-500'>{errors.zipCode?.type === 'required' && "Zip Code is required"}</p>
                    </div>
                </div>
                <input
                    className="border border-gray-300 cursor-pointer bg-red-700 text-white text-sm uppercase font-bold block w-full p-2.5"
                    disabled={errors.type === 'required'} type="submit" value="Submit Address" />

            </form>
            <div className='col-span-3 pt-12 pr-3'>
                <h1 className='text-gray-600 font-semibold text-lg mb-3 ml-4                       '>Payment Details</h1>
                <PaymentDetails></PaymentDetails>
            </div>
        </div>
    );
};

export default Shipping;
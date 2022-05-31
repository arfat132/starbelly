import React from 'react';
import { useForm } from 'react-hook-form';
import PaymentDetails from './PaymentDetails';
const Shipping = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='px-20 grid grid-cols-7'>
            <form onSubmit={handleSubmit(onSubmit)} className="col-span-4 p-10">
                <h1 className='text-gray-600 font-semibold text-lg mb-5'>Shipping Address</h1>
                <div className='flex'>
                    <input
                        className="mb-5 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        placeholder='First Name'
                        {...register("firstName", { required: true })} />
                    <input
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        placeholder='Last Name'
                        {...register("lastName", { required: true })} />
                    {errors.firstName?.type === 'required' && "Name is required"}
                </div>

                <input
                    type='text'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                    placeholder='Address'
                    {...register("address", { required: true })} />
                <label className="label">
                    {errors.address?.type === 'required' && "Address is required"}
                </label>
                <div >
                    <input
                        placeholder="Apartment No"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        type='text'
                        {...register("apartment", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                <div className='flex'>
                    <input
                        className="mb-5 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        placeholder='City'
                        {...register("city", { required: true })} />
                    <input
                        className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        placeholder='Zip Code'
                        {...register("zip", { required: true })} />
                    {errors.firstName?.type === 'required' && "Name is required"}
                </div>
                <input
                    className="border border-gray-300 bg-red-700 text-white text-sm uppercase font-bold block w-full p-2.5"
                    type="submit" value="Submit Address" />

            </form>
            <div className='col-span-3 pt-12 pr-3'>
                <h1 className='text-gray-600 font-semibold text-lg mb-3 ml-4'>Payment Details</h1>
                <PaymentDetails></PaymentDetails>
            </div>
        </div>
    );
};

export default Shipping;
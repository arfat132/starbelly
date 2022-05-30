import React from 'react';
import { useForm } from 'react-hook-form';
const Shipping = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='py-20 flex'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto p-5 m-20">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                    placeholder='Address'
                    {...register("address", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })} />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                            },
                            minLength: {
                                value: 8,
                                message: 'Must be 8 characters'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
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
                    type="submit" value="Continue Shopping" />

            </form>
            <div className='w-50'>

            </div>
        </div>
    );
};

export default Shipping;
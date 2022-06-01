import React from 'react';
import Footer from '../../Shared/Footer';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { TiLocationOutline } from 'react-icons/ti';
import { FiPhoneCall } from 'react-icons/fi';
const Contact = () => {
    return (
        <div className='bg-white'>
            <img className='pt-12 lg:h-full h-48' src="https://i.ibb.co/RvhwfGj/faq1.png" alt="" srcset="" />
            <h1 className='lg:text-5xl text-2xl mb-12 font-mono font-bold text-center text-white mt-[-80px]  lg:mt-[-180px]'>Contact With Us</h1>
            <div class="flex flex-wrap justify-between py-8 border border-gray-200  mt-40 mx-8 lg:mx-24 mb-10 bg-gray-50">
                <div class="lg:w-1/3 px-6 flex items-center">
                    <TiLocationOutline className='text-8xl mr-2 text-red-700' />
                    <div>
                        <h2 class="title-font font-semibold text-red-700 tracking-widest text-sm mb-1">ADDRESS</h2>
                        <p class="mt-1">No: 58 A, East Madison Street,
                            Baltimore, MD, California, USA 4508</p>
                    </div>
                </div>
                <div class="lg:w-1/3 px-6 mt-4 lg:mt-0 flex items-center">
                    <MdOutlineAttachEmail className='text-5xl lg:text-7xl mr-3 text-red-700' />
                    <div>
                        <h2 class="title-font font-semibold text-red-700 tracking-widest text-sm mb-1">EMAIL</h2>
                        <p class="leading-relaxed">starbelly_official@email.com</p>
                        <p class="leading-relaxed">starbelly123@email.com</p>
                    </div>
                </div>
                <div class="lg:w-1/3 px-6 mt-6 lg:mt-0 flex items-center">
                    <FiPhoneCall className='text-4xl lg:text-6xl mr-5 lg:mr-4 text-red-700' />
                    <div>
                        <h2 class="title-font font-semibold text-red-700 tracking-widest text-sm mb-1">Phone</h2>
                        <p class="leading-relaxed">123-456-7890</p>
                        <p class="leading-relaxed">123-456-7890</p>
                    </div>
                </div>
            </div>
            <section class="text-gray-600 body-font relative">
                <div class="container lg:px-24 px-8 pb-20 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/5 md:w-1/1 w-full bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                    </div>
                    <div class="lg:w-3/5 md:w-1/2 bg-gray-50 border border-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 shadow-lg p-8">
                        <h2 class="text-red-700 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 text-lg">Button</button>
                        <p class="text-sm text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
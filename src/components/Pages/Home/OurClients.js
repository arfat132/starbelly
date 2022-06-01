import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../MenuDetails/style.css";
import { Pagination } from "swiper";

const OurClients = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 className='text-center font-mono font-bold text-3xl mb-10'>Our Clients</h1>
                <>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwipe"
                    >
                        <SwiperSlide> <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/XDrjPGV/logo5.png" alt="logo5" border="0" /></SwiperSlide>
                        <SwiperSlide> <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/JxkTbb7/logo4.png" alt="logo4" border="0" /></SwiperSlide>
                        <SwiperSlide>  <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/MMS6j1B/logo3.png" alt="logo3" border="0" /></SwiperSlide>
                        <SwiperSlide> <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/ZJ8c0N6/logo2.png" alt="logo2" border="0" /></SwiperSlide>
                        <SwiperSlide>    <img className='w-24mx-auto' src="https://i.ibb.co/VDNRNms/logo1.png" alt="logo1" border="0" /></SwiperSlide>
                        <SwiperSlide> <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/XDrjPGV/logo5.png" alt="logo5" border="0" /></SwiperSlide>
                        <SwiperSlide> <img className='w-24 mx-auto' src="https://i.ibb.co/JxkTbb7/logo4.png" alt="logo4" border="0" /></SwiperSlide>
                        <SwiperSlide>  <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/MMS6j1B/logo3.png" alt="logo3" border="0" /></SwiperSlide>
                        <SwiperSlide> <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/ZJ8c0N6/logo2.png" alt="logo2" border="0" /></SwiperSlide>
                        <SwiperSlide>    <img className='w-24 mx-auto pb-15' src="https://i.ibb.co/VDNRNms/logo1.png" alt="logo1" border="0" /></SwiperSlide>
                    </Swiper>
                </>
            </div>
        </section>
    );
};

export default OurClients;
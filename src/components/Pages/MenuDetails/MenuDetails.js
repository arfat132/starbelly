import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper";
import Footer from '../../Shared/Footer';


const MenuDetails = () => {
  const { id } = useParams();
  const [menuDetails, setMenuDetails] = useState({});
  const [count, setCount] = useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`http://localhost:5000/foods/${id}`)
      .then(res => res.json())
      .then(data => setMenuDetails(data))
  }, [id])



  return (
    <>
      <div class="drawer drawer-end pt-20">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <div class="text-gray-600 body-font px-12 font-mono">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="bg-transparent lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">{menuDetails.name}</h1>
                <p class="mb-8 leading-relaxed text-lg">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div className='flex'>
                  <span className='font-extrabold text-black text-4xl mb-6'>${menuDetails.price}</span>
                  <div className='mx-auto mb-6'>
                    <button onClick={() => setCount(count - 1)} className='bg-red-700 px-4 py-1 border border-red-700 text-white ml-12 '>-</button>
                    <button className='px-4 py-0.5 border border-red-700 font-medium text-lg mt-1'>{count}</button>
                    <button onClick={() => setCount(count + 1)} className='bg-red-700 px-4 py-1 border border-red-700 text-white'>+</button>
                  </div>
                </div>
                <label for="my-drawer-4" class="drawer-button btn rounded-none border-none mb-6 bg-red-700 text-white uppercase font-bold text-xl py-2 mt-6 hover:bg-red-600"><AiOutlineShoppingCart className='text-white mr-2 text-2xl flex' />Buy Now</label>
                <>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwipe"
                  >
                    <SwiperSlide> <img class="object-cover object-center rounded mx-auto z-0" alt="hero" src={menuDetails.img} /></SwiperSlide>
                    <SwiperSlide> <img class="object-cover object-center rounded mx-auto z-0" alt="hero" src={menuDetails.img} /></SwiperSlide>
                    <SwiperSlide> <img class="object-cover object-center rounded mx-auto z-0" alt="hero" src={menuDetails.img} /></SwiperSlide>
                    <SwiperSlide> <img class="object-cover object-center rounded mx-auto z-0" alt="hero" src={menuDetails.img} /></SwiperSlide>
                    <SwiperSlide> <img class="object-cover object-center rounded mx-auto z-0" alt="hero" src={menuDetails.img} /></SwiperSlide>
                  </Swiper>
                </>
              </div>

              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded mx-auto z-0" alt="hero" src={menuDetails.img} />
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <ul class="menu overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content font-mono">
              <div className='flex justify-between items-center'>
              <h1 className='font-bold text-2xl mb-2'>Your Cart</h1>
              </div>
              <hr />
              <div className='flex'>
                <img className='w-24 ' src={menuDetails.img} alt="" srcset="" />
                <div>
                  <h4 className='font-bold mt-2 text-gray-700'>{menuDetails.name}</h4>
                  <h5 className='capitalize font-sm mb-4 mr-16'>{menuDetails.category}</h5>
                  <span className='font-medium text-gray-700 text-xl'>${menuDetails.price}</span>
                </div>
              </div>
              <div className='mx-auto mb-6'>
                <button onClick={() => setCount(count - 1)} className='bg-red-700 px-4 py-1 border border-red-700 text-white ml-12 '>-</button>
                <button className='px-4 border border-red-700 font-sm text-lg'>{count}</button>
                <button onClick={() => setCount(count + 1)} className='bg-red-700 px-4 py-1 border border-red-700 text-white'>+</button>
              </div>
              <hr />
              <div className='flex justify-between items-center font-medium my-3 text-lg text-gray-700 '>
                <span>Total</span>
                <span>${menuDetails.price * count}</span>
              </div>
              <hr />
              <p className='my-6'>Shipping, taxes, and discounts will be calculated at checkout.</p>
              <hr className='mb-6' />
              <button onClick={() => navigate('/orderProcessing/checkout')} className='bg-red-700 text-white py-2 mb-3'>Checkout</button>
              <button onClick={() => navigate('/orderProcessing')} className='bg-red-700 text-white py-2'>View Cart</button>
            </div>
          </ul>
        </div>
      </div>
    </>

  );
};

export default MenuDetails;
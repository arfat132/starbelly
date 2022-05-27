import React from 'react';
import Banner from '../Home/Banner/banner.jpg';
import Banner1 from '../Home/Banner/banner-1.jpg';
import Banner2 from '../Home/Banner/banner-2.jpg';
import Carousel from 'nuka-carousel';
import Counter from '../Counter/Counter';
import Info from '../Info/Info';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Carousel className='pt-20'>
                <img src={Banner} alt='' />
                <img src={Banner1} alt='' />
                <img src={Banner2} alt='' />
            </Carousel>
            <Info></Info>
            <div>
                <nav class="tabs px-20 mb-8">
                    <Link to="/" class="tab tab-lifted tab-active bg-red-700 text-red-700 font-bold uppercase font-5xl">Breakfast</Link>
                    <Link to="lunch" class="tab tab-lifted text-red-700 font-bold uppercase font-5xl" >Lunch</Link>
                    <Link to="dinner" class="tab tab-lifted text-red-700 font-bold uppercase font-5xl">Dinner</Link>
                </nav>
                <div className="content">
                    <Outlet />
                </div>
            </div>
            <Counter></Counter>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Home/Banner/banner.jpg';
import Banner1 from '../Home/Banner/banner-1.jpg';
import Banner2 from '../Home/Banner/banner-2.jpg';
import Carousel from 'nuka-carousel';
import Menu from '../Menu/Menu';
import Counter from '../Counter/Counter';
import Info from '../Info/Info';
const Home = () => {
    return (
        <div>
        <Carousel className='pt-20'>
        <img src={Banner} alt='' />
        <img src={Banner1} alt='' />
        <img src={Banner2} alt='' />
            </Carousel> 
        <Info></Info>    
            <Menu></Menu>
            <Counter></Counter>
        </div>
    );
};

export default Home;
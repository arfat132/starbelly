import React from 'react';
import Counter from './Counter';
import Info from './Info';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
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
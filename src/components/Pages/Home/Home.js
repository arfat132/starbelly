import React from 'react';
import Counter from './Counter';
import Info from './Info';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            <Info></Info>
            <div>
                <nav class="tabs px-20 mb-8">
                <NavLink className={({ isActive }) =>
                    isActive ? "tab tab-lifted tab-active bg-red-700 text-red-700 font-bold uppercase font-5xl" : "tab tab-lifted text-gray-600 font-bold uppercase font-5xl"
                }
                    to="/"
                    end={true}>
                    Breakfast
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                    isActive ? "tab tab-lifted tab-active bg-red-700 text-red-700 font-bold uppercase font-5xl" : "tab tab-lifted text-gray-600 font-bold uppercase font-5xl"
                }
                    to="lunch"
                    end={true}>
                    lunch
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                    isActive ? "tab tab-lifted tab-active bg-red-700 text-red-700 font-bold uppercase font-5xl" : "tab tab-lifted text-gray-600 font-bold uppercase font-5xl"
                }
                    to="dinner"
                    end={true}>
                    dinner
                </NavLink>
                   
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
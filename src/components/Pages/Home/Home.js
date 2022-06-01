import React from 'react';
import Counter from './Counter';
import Info from './Info';
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import MenuList from './MenuList';
import MakesSpecial from './MakesSpecial';
import OurGallery from './OurGallery';
import Footer from '../../Shared/Footer';
import OurClients from './OurClients';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div class="hero h-[900px] bg-[url(https://i.ibb.co/n39zKXK/banner4.png)]">
                    <div class="hero-overlay bg-opacity-0"></div>
                    <div class="hero-content text-left text-neutral-content sm:ml-0 lg:ml-[-650px] lg:w-[700px]">
                        <div class="">
                            <h1 class="mb-5 text-2xl lg:text-5xl font-bold font-mono text-red-700">Enjoy delicious foods <br />with Starbelly</h1>
                            <p class="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat culpa itaque consequatur accusamus enim perspiciatis maxime numquam doloribus.</p>
                            <button onClick={()=>navigate('/shop')} className='px-4 py-2 uppercase bg-red-700'>View All Dishes</button>
                        </div>
                    </div>
                </div>
            </div>
            <Info></Info>
            <MakesSpecial></MakesSpecial>
            <div>
                <div class="hero h-[400px] bg-[url(https://i.ibb.co/qL8C055/d.png)]">
                    <div class="hero-overlay bg-opacity-0"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="">
                            <h4 className='text-xl mb-2'>Enjoy Great Recipe</h4>
                            <h1 class="mb-5 text-2xl lg:text-5xl font-bold font-mono text-red-700">Healthy And Delicious Food</h1>
                            <h1  className='text-2xl mb-4'>Flat 50% Discount</h1>
                            <button onClick={()=>navigate('/shop')} className='px-4 py-2 uppercase bg-red-700'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <MenuList></MenuList>
            <div>
            <h1 className='text-center font-mono font-bold text-2xl'>Our Flavourful Dishes</h1>
            <p className='text-center text-gray-600 mt-2 mx-auto mb-9 px-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint officiis animi, temporibus itaque molestias commodi ex quis harum voluptatum.</p>
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
            <OurGallery></OurGallery>
            <OurClients></OurClients>
            <Footer></Footer>
        </div>
    );
};

export default Home;
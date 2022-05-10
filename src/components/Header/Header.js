import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-white border-gray-200 px-20 py-4 shadow-md w-full fixed z-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="text-xl font-bold text-red-800">STARBELLY</span>
                </Link>
                <div className="flex text-md font-bold uppercase text-red-800">
                    <Link to="/" className="block py-3 pr-4 pl-3 " >Home</Link>
                    <Link to="/about" className="block py-3 pr-4 pl-3  ">About</Link>
                    <Link to="/contact" className="block py-3 pr-4 pl-3 ">Contact</Link>
                    <Link to="/login" className="block py-3 pr-4 pl-3 ">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
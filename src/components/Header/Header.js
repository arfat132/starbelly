import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { FaRegUserCircle } from 'react-icons/fa';
const Header = () => {
    return (
        <nav className="bg-white border-gray-200 px-20 py-4 shadow-md bg-transparent w-full fixed z-10 font-mono">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="text-xl font-bold text-red-800">STARBELLY</span>
                </Link>
                <div className="flex text-xl font-bold uppercase text-red-800">
                    <Link to="/" className="block py-3 pr-4 pl-3 " >Home</Link>
                    <Link to="/shop" className="block py-3 pr-4 pl-3  ">Shop</Link>
                    <Link to="/about" className="block py-3 pr-4 pl-3  ">Blog</Link>
                    <Link to="/about" className="block py-3 pr-4 pl-3  ">FAQ</Link>
                    <Link to="/contact" className="block py-3 pr-4 pl-3 ">Contact</Link>
                    <Link to="/login" className="block py-3 pr-4 pl-3 ">Login</Link>
                    <Link to="/login" className="block py-3 pr-4 pl-3 "><GrCart /></Link>
                    <Link to="/login" className="block py-3 pr-4 pl-3 "><FaRegUserCircle/></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
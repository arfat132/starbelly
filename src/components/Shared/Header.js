import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { FaRegUserCircle } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        
    };
    return (
        <nav className="bg-white border-gray-200 px-20 py-4 shadow-md w-full fixed font-mono mb-24">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="text-xl font-bold text-red-800">STARBELLY</span>
                </Link>
                <div className="flex text-xl font-bold uppercase text-red-800 items-center">
                    <Link to="/" className="block py-3 pr-4 pl-3 " >Home</Link>
                    <Link to="/shop" className="block py-3 pr-4 pl-3  ">Shop</Link>
                    <Link to="/about" className="block py-3 pr-4 pl-3  ">Blog</Link>
                    <Link to="/about" className="block py-3 pr-4 pl-3  ">FAQ</Link>
                    <Link to="/contact" className="block py-3 pr-4 pl-3 ">Contact</Link>
                    {
                        user?.uid ?
                            <Link to="/signIn" onClick={logout}className="block py-3 pr-4 pl-3 ">Sign Out</Link>
                            :
                            <Link to="/signIn" className="block py-3 pl-3 text-center"><FaRegUserCircle /></Link>
                    }
                     <Link to="/login" className="block py-3 pr-4 pl-3 "><GrCart /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);

    };
    return (
        <>
            <div class="navbar bg-base-100 lg:px-20 sm:px-0 fixed top-0 shadow-md">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li> <Link to="/" className="block py-3 pr-4 pl-3 " >Home</Link></li>
                            <li><Link to="/shop" className="block py-3 pr-4 pl-3  ">Shop</Link></li>
                            <li><Link to="/about" className="block py-3 pr-4 pl-3  ">Blog</Link></li>
                            <li><Link to="/about" className="block py-3 pr-4 pl-3  ">FAQ</Link></li>
                            <li><Link to="/contact" className="block py-3 pr-4 pl-3 ">Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl font-bold text-red-800">STARBELLY</Link>
                    <div class="flex-none ml-20 lg:ml-0 lg:hidden">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle -mt-5">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span class="badge badge-sm indicator-item mt-2 bg-red-700 py-2">0</span>
                                </div>
                            </label>
                            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">8 Items</span>
                                    <span class="text-info">Subtotal: $999</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block"> <Link to="/orderProcessing" className="block py-3 pr-4 pl-3 ">View Cart</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=33791" />
                                </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-5 p-2 shadow bg-gray-50 rounded-box w-52">
                                <li>
                                    <Link to="/signIn" className="block py-3 pr-4 pl-3 ">Profile</Link>
                                </li>
                                <li> {
                                    user?.uid ?
                                        <Link to="/signIn" onClick={logout} className="block py-3 pr-4 pl-3 ">Sign Out</Link>
                                        :
                                        <Link to="/signIn" className="block py-3 pl-3 text-center">Sign In</Link>
                                }</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-xl font-bold uppercase text-red-800 font-mono py-4">

                        <li> <Link to="/" className="block py-3 pr-4 pl-3 " >Home</Link></li>
                        <li><Link to="/shop" className="block py-3 pr-4 pl-3  ">Shop</Link></li>
                        <li><Link to="/blogs" className="block py-3 pr-4 pl-3  ">Blog</Link></li>
                        <li><Link to="/faq" className="block py-3 pr-4 pl-3  ">FAQ</Link></li>
                        <li><Link to="/contact" className="block py-3 pr-4 pl-3 ">Contact</Link></li>
                        <div class="flex-none z-99">
                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-ghost btn-circle -mt-5">
                                    <div class="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span class="badge badge-sm indicator-item mt-2 bg-red-700 py-2">0</span>
                                    </div>
                                </label>
                                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div class="card-body">
                                        <span class="font-bold text-lg">8 Items</span>
                                        <span class="text-info">Subtotal: $999</span>
                                        <div class="card-actions">
                                            <button class="btn btn-primary btn-block"> <Link to="/orderProcessing" className="block py-3 pr-4 pl-3 ">View Cart</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown dropdown-end ml-2">
                                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                    <div class="w-10 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" />
                                    </div>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-5 p-2 shadow bg-gray-50 rounded-box w-52">
                                    <li>
                                        <Link to="/signIn" className="block py-3 pr-4 pl-3 ">Profile</Link>
                                    </li>
                                    <li> {
                                        user?.uid ?
                                            <Link to="/signIn" onClick={logout} className="block py-3 pr-4 pl-3 ">Sign Out</Link>
                                            :
                                            <Link to="/signIn" className="block py-3 pl-3 text-center">Sign In</Link>
                                    }</li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';

const OrderProcessing = () => {
    return (
        <div>
            <nav class="lg:px-28 px-6 mb-8 pt-28 flex">
                <NavLink className={({ isActive }) =>
                    isActive ? "text-red-700 font-bold uppercase font-5xl flex items-center" : "text-gray-500 font-bold uppercase font-5xl flex items-center"
                }
                    to="/orderProcessing"
                    end={true}>
                    Cart<FaGreaterThan className='font-xs mx-2 text-xs' />
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-red-700 font-bold uppercase font-5xl flex items-center" : "text-gray-500 font-bold uppercase font-5xl flex items-center"
                }
                    to="checkout"
                    end={true}>
                    Checkout<FaGreaterThan className='font-xs mx-2 text-xs' />
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-red-700 font-bold uppercase font-5xl flex items-center" : "text-gray-500 font-bold uppercase font-5xl flex items-center"
                }
                    to="shipping"
                    end={true}>
                    Shipping<FaGreaterThan className='font-xs mx-2 text-xs' />
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-red-700 font-bold uppercase font-5xl flex items-center" : "text-gray-500 font-bold uppercase font-5xl flex items-center"
                }
                    to="payment"
                    end={true}>
                    Payment
                </NavLink>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default OrderProcessing;
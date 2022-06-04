import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';

const MenuList = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menulist.json")
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [menu])
    return (
        <div className='lg:px-20 sm:px-4 mx-auto my-20'>
            <h1 className='text-center font-mono font-bold text-2xl'>Our Flavourful Menu</h1>
            <p className='text-center text-gray-600 mt-2 mx-auto md:px-30 px-0 lg:px-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint officiis animi, temporibus itaque molestias commodi ex quis harum voluptatum.</p>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 my-6 mx-auto w-full'>
                {
                    menu.map(menuItem => <MenuItem
                        key={menuItem.id}
                        menuItem={menuItem}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuList;

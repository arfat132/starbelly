import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Dinner = () => {
    const [dinners, setDinner] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setDinner(data.filter(food => food.category.includes('dinner'))))
    }, [dinners])
    return (
        <div>
        <section id='#services' className="text-gray-600 body-font">
            <div className="container px-20 pb-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        dinners.map(dinner=> <Food
                            key={dinner.id}
                            selectedFood={dinner}
                        ></Food>)
                    }
                </div>
            </div>
        </section>
    </div>
    );
};

export default Dinner;
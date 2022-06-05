import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';

const Breakfast = () => {
    const [breakfasts, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setBreakfast(data.filter(food => food.menu.includes('breakfast'))))
    }, [breakfasts])
    return (
        <div>
            <section id='#services' className="text-gray-600 body-font">
                <div className="container px-20 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            breakfasts.slice(-8).map(breakfast => <Food
                                key={breakfast._id}
                                selectedFood={breakfast}
                            ></Food>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Breakfast;
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Lunch = () => {
    const [lunchs, setLunch] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setLunch(data.filter(food => food.category.includes('lunch'))))
    }, [lunchs])
    return (
        <div>
            <section id='#services' className="text-gray-600 body-font">
                <div className="container px-20 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            lunchs.map(lunch => <Food
                                key={lunch.id}
                                selectedFood={lunch}
                            ></Food>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lunch;
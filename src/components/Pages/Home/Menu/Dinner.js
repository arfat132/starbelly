import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';
import Spinner from '../../../Shared/Spinner'

const Dinner = () => {
    const [dinners, setDinner] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://whispering-tor-70957.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setDinner(data.filter(food => food.menu.includes('dinner'))))
        setLoading(false)
    }, [dinners])
    return (
        <>
            {loading ? (<Spinner></Spinner>) : (<section id='#services' className="text-gray-600 body-font">
                <div className="container px-20 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            dinners.slice(-8).map(dinner => <Food
                                key={dinner._id}
                                selectedFood={dinner}
                            ></Food>)
                        }
                    </div>
                </div>
            </section>)}
        </>
    );
};

export default Dinner;
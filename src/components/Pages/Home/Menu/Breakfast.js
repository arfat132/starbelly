import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';
import Spinner from '../../../Shared/Spinner'
const Breakfast = () => {
    const [breakfasts, setBreakfast] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://whispering-tor-70957.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setBreakfast(data.filter(food => food.menu.includes('breakfast'))))
        setLoading(false)
    }, [breakfasts])
    return (
        <>
            {loading ? (<Spinner />) :
                (<div>
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
                </div>)}
        </>
    );
};

export default Breakfast;
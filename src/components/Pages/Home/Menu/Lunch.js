import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';
import Spinner from '../../../Shared/Spinner'

const Lunch = () => {
    const [lunchs, setLunch] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://whispering-tor-70957.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setLunch(data.filter(food => food.menu.includes('lunch'))))
        setLoading(false)
    }, [lunchs])
    return (
        <>
            {loading ? (<Spinner />) : (<section id='#services' className="text-gray-600 body-font">
                <div className="container px-20 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            lunchs.slice(-8).map(lunch => <Food
                                key={lunch._id}
                                selectedFood={lunch}
                            ></Food>)
                        }
                    </div>
                </div>
            </section>)}
        </>
    );
};

export default Lunch;
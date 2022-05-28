import React, { useEffect, useState } from 'react';
import Food from '../../Food/Food';

const LowToHigh = () => {
    const [lowToHighest, setLowToHighest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setLowToHighest(data.sort((a, b) => (a.price) - (b.price))))
    }, [lowToHighest])

    return (
        <div>
            <section id='#services' className="text-gray-600 body-font">
                <div className="container px-20 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            lowToHighest.map(lowToHigh => <Food
                                key={lowToHigh._id}
                                selectedFood={lowToHigh}
                            ></Food>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LowToHigh;
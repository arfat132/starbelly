import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';

const LowToHigh = () => {
    const [lowToHighest, setLowToHighest] = useState([]);
    const [limit, setLimit] = useState(4);
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        fetch(`https://whispering-tor-70957.herokuapp.com/priceLowToHigh?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setLowToHighest(data))
    }, [lowToHighest])

    return (
        <div>
            <p className='flex items-center ml-4 mt-[-46px] text-gray-500'>Paginate by
                <select onChange={(e) => setLimit(e.target.value)} className="py-2 px-2 ml-3 bg-red-700 text-white hover:border-none rounded-none">
                    <option>4</option>
                    <option>8</option>
                    <option>12</option>
                    <option>16</option>
                    <option>20</option>
                </select></p>
            <section id='#services' className="text-gray-600 body-font pt-12">
                <div className="container px-20 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4 mb-6">
                        {
                            lowToHighest.map(lowToHigh => <Food
                                key={lowToHigh._id}
                                selectedFood={lowToHigh}
                            ></Food>)
                        }
                    </div>
                    <div className='mx-auto text-center mb-6 "inline-flex items-center -space-x-px'>
                        {
                            [...Array(5).keys()].map(number => <div onClick={() => setPageNumber(number)} className={`inline-flex items-center -space-x-px py-2 px-3 leading-tight text-white bg-red-700 border border-gray-300 ${pageNumber === number ? "bg-red-600" : "bg-red-700"}`}>

                                {number + 1}</div>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default LowToHigh;
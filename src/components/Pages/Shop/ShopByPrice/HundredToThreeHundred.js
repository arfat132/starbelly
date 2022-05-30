import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';

const HundredToThreeHundred = () => {
    const [allDishes, setDishes] = useState([]);
    const [limit, setLimit] = useState(4);
    const [pageNumber, setPageNumber] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/hundredToThreeHundred?limit=${limit}&pageNumber=${pageNumber}`)
            .then(res => res.json())
            .then(data => setDishes(data))
    }, [limit, pageNumber])

    return (
        <div>
            <div className='flex justify-between bg-gray-200 bg-opacity-60 mt-4 px-4 py-3'>
                    <p className='flex items-center ml-4  text-gray-500'>Paginate by
                        <select onChange={(e) => setLimit(e.target.value)} class="py-2 px-2 ml-3 bg-red-700 text-white hover:border-none rounded-none">
                            <option>4</option>
                            <option>8</option>
                            <option>12</option>
                            <option>16</option>
                            <option>20</option>
                        </select></p>
                    <p className='flex items-center text-gray-500'>Sort by
                        <select  class="py-2 px-2 ml-3 bg-red-700 text-white hover:border-none rounded-none">
                            <option>Featured</option>
                            <option>Low to high</option>
                            <option>Hight to Low</option>
                        </select></p>
            </div>
            <section id='#services' className="text-gray-600 body-font pt-12 auto">
                    <div className="container px-20 pb-16 mx-auto">
                        {allDishes?.length ?
                            <div className="flex flex-wrap -m-4 mb-6">
                                {
                                    allDishes.map(allDishes => <Food
                                        key={allDishes._id}
                                        selectedFood={allDishes}
                                    ></Food>)
                                }
                            </div>
                            :
                            <div><p className='text-center my-[232px]'>No Product Found</p></div>

                        }

                        <div className='mx-auto text-center mb-6 "inline-flex items-center -space-x-px'>
                            {
                                [...Array(5).keys()].map(number => <div onClick={() => setPageNumber(number)} class={`inline-flex items-center -space-x-px py-2 px-3 leading-tight text-white bg-red-700 border border-gray-300 ${pageNumber === number ? "bg-red-600" : "bg-red-700"}`}>

                                    {number + 1}</div>)
                            }

                        </div>

                    </div>
                </section>
        </div>
    );
};

export default HundredToThreeHundred;
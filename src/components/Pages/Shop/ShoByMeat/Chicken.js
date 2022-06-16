import React, { useEffect, useState } from 'react';
import Food from '../../../Shared/Food';

const Chicken = () => {
    const [chicken, setChicken] = useState([]);
    const [limit, setLimit] = useState(4);
    const [pageNumber, setPageNumber] = useState(0)
    const [sort, setSort] = useState("Featured");

    useEffect(() => {
        fetch(`http://localhost:5000/foods`)
            .then(res => res.json())
            .then(data => console.log(data.filter(chicken => chicken.meat.includes('chicken'))))
    }, [chicken])
    return (
        <>
            <div>
                <div className='flex justify-between bg-gray-200 bg-opacity-60 mt-4 sm:mx-6 md:mx-6 px-4 py-3'>
                    <p className='flex items-center ml-4  text-gray-500'>Paginate by
                        <select onChange={(e) => setLimit(e.target.value)} class="py-2 px-2 ml-3 bg-red-700 text-white hover:border-none rounded-none">
                            <option>4</option>
                            <option>8</option>
                            <option>12</option>
                            <option>16</option>
                            <option>20</option>
                        </select></p>
                    <p className='flex items-center text-gray-500'>Sort by
                        <select onChange={e => setSort(e.target.value)} class="py-2 px-2 ml-3 bg-red-700 text-white hover:border-none rounded-none">
                            <option value="featured">Featured</option>
                            <option value="low">Low to high</option>
                            <option value="high">High to Low</option>
                        </select></p>
                </div>

                <section id='#services' className="text-gray-600 body-font pt-12 auto">
                    <div className="container px-14 pb-16 mx-auto">
                        {chicken?.length ?
                            <div className="flex flex-wrap -m-4 mb-6">
                                {
                                    chicken.slice(0, 8).map(chickenDishe => <Food
                                        key={chickenDishe._id}
                                        selectedFood={chickenDishe}
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
        </>
    );
};

export default Chicken;
import React from 'react';
import { useState, useEffect } from 'react';
import Food from '../Food/Food';

const foods = [
    {
        "id": 1,
        "category": "breakfast",
        "name": "English Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast.jpg",
        "shipping": 10

    },

    {
        "id": 2,
        "category": "breakfast",
        "name": "Light Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast-1.jpg",
        "shipping": 10

    },

    {
        "id": 3,
        "category": "breakfast",
        "name": "Heavy Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast-2.jpg",
        "shipping": 10

    },
    {
        "id": 4,
        "category": "breakfast",
        "name": "English Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast.jpg",
        "shipping": 10

    },

    {
        "id": 5,
        "category": "breakfast",
        "name": "Light Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast-1.jpg",
        "shipping": 10

    },

    {
        "id": 6,
        "category": "breakfast",
        "name": "Heavy Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast-2.jpg",
        "shipping": 10

    },

    {
        "id": 7,
        "category": "breakfast",
        "name": "Middle Breakfast",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/breakfast-3.jpg",
        "shipping": 10

    },


    {
        "id": 8,
        "category": "lunch",
        "name": "Light Lunch",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/lunch-1.jpg",
        "shipping": 10

    },

    {
        "id": 9,
        "category": "lunch",
        "name": "Heavy Lunch",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/lunch-2.jpg",
        "shipping": 10

    },

    {
        "id": 10,
        "category": "lunch",
        "name": "Middle Lunch",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/lunch-3.jpg",
        "shipping": 10

    },
    {
        "id": 11,
        "category": "lunch",
        "name": "Light Lunch",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/lunch-1.jpg",
        "shipping": 10

    },

    {
        "id": 12,
        "category": "lunch",
        "name": "Heavy Lunch",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/lunch-2.jpg",
        "shipping": 10

    },

    {
        "id": 13,
        "category": "lunch",
        "name": "Middle Lunch",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/lunch-3.jpg",
        "shipping": 10

    },

    {
        "id": 14,
        "category": "dinner",
        "name": "English dinner",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/dinner.jpg",
        "shipping": 10

    },

    {
        "id": 15,
        "category": "dinner",
        "name": "Light Dinner",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/dinner-1.jpg",
        "shipping": 10

    },

    {
        "id": 16,
        "category": "dinner",
        "name": "Heavy Dinner",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/dinner-2.jpg",
        "shipping": 10

    },

    {
        "id": 17,
        "category": "dinner",
        "name": "Middle",
        "price": 420,
        "ratings": "★★★★",
        "ratingsCount": 3725,
        "img": "./images/dinner-3.jpg",
        "shipping": 10

    }
];

const breakfasts = foods.filter(food => food.category.includes('breakfast'));

const lunchs = foods.filter(food => food.category.includes('lunch'));
const dinners = foods.filter(food => food.category.includes('dinner'));
const Menu = () => {
    const [selectedFoods, setSelectedFoods] = useState(breakfasts);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //     .then(foods => console.log(foods))
    // },[])


    return (
        <div>
            <div className='mb-8'>
                <button onClick={() => setSelectedFoods(breakfasts)} className='text-red-700 font-bold uppercase text-xl p-4'>Breakfasts</button>
                <button onClick={() => setSelectedFoods(lunchs)} className='text-red-700 font-bold uppercase text-xl p-4'>Lunches</button>
                <button onClick={() => setSelectedFoods(dinners)} className='text-red-700 font-bold uppercase text-xl p-4'>Dinners</button>
            </div>
            <div>
                <section id='#services' className="text-gray-600 body-font">
                    <div className="container px-20 pb-16 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                selectedFoods.map(selectedFood => <Food
                                    key={selectedFood.id}
                                    selectedFood={selectedFood}
                                ></Food>)
                            }

                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Menu;
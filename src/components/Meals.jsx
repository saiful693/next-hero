"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {

    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');

    // get api calls data
    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setMeals(data.meals);
            setError('')
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        loadData();
    }, [search])


    // get input
    const handler = (e) => {
        setSearch(e.target.value);
        // console.log(e.target.value)
    }
    return (
        <div className='mt-12'>
            <input onChange={handler} className='p-2 border border-spacing-1' type="text" name="" placeholder='search meals....' />
            <button className='bg-cyan-600 px-4 py-2 rounded-lg'>Search</button>

            <div className='mt-12 grid grid-cols-3 gap-8'>
                {
                    meals?.length > 0 && !error && meals?.map(meal => (
                        <div className='p-3 border border-spacing-1 shadow-xl' key={meal.idMeal}>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} width={300} height={300}></Image>
                            <h6 className='text-2xl font-bold'>{meal.strMeal}</h6>
                            <p className='text-xl font-medium'>Category: {meal.strCategory}</p>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }
                {
                    (meals?.length <= 0 || error) && <h6 className='text-red-700'>No Data Found...... {error}</h6>
                }
            </div>
        </div>
    );
};

export default Meals;
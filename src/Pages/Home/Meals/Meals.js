import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('homePageMeal.json')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, []);
    return (
        <div className='my-5'>
            <h2 className='my-5 text-primary text-uppercase text-center'>Find Your Favorite Food Here</h2>
            <div className='row'>
                {
                    meals.map((meal, index) => <Meal key={index} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default Meals;
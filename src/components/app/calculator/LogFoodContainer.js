import React from 'react';
import LogFoodCardComponent from './LogFoodCardComponent';

function LogFoodContainer() {
    return (
        <div
            className='basis-full md:basis-6/12 lg:basis-6/12 
                       border-0 rounded-lg flex flex-col gap-4'
        >
            <LogFoodCardComponent
                title='Breakfast'
                cardClassName='bg-green-500'
                consumedCalories='400'
                mealId={1}
            >
                test 1
            </LogFoodCardComponent>
            <LogFoodCardComponent
                title='Lunch'
                cardClassName='bg-orange-500'
                consumedCalories='550'
                mealId={2}
            >
                test 2
            </LogFoodCardComponent>
            <LogFoodCardComponent
                title='Snacks'
                cardClassName='bg-sky-600'
                consumedCalories='250'
                mealId={4}
            >
                test 3
            </LogFoodCardComponent>
            <LogFoodCardComponent
                title='Dinner'
                cardClassName='bg-indigo-700'
                consumedCalories='250'
                mealId={3}
            >
                test 4
            </LogFoodCardComponent>
        </div>
    );
}

export default LogFoodContainer;

'use client';
import React, { useState } from 'react';
import NutrientCalculatorResultComponent from '@/components/app/calculator/NutrientCalculatorResultComponent';
import LogFoodContainer from '@/components/app/calculator/LogFoodContainer';

function page() {
    const [foodData, setFoodData] = useState({
        totalCalories: null,
        totalCarbs: null,
        totalProtein: null,
        totalFat: null,
        totalSodium: null,
        totalFiber: null,
    });
    return (
        <div
            className='basis-full  gap-2 p-10 md:p-5 lg:p-5  
                       flex flex-col md:flex-row lg:flex-row '
        >
            <NutrientCalculatorResultComponent data={foodData} />
            <LogFoodContainer setParentState={setFoodData} />
        </div>
    );
}

export default page;

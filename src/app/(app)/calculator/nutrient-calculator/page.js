import React from 'react';
import NutrientCalculatorResultComponent from '@/components/app/calculator/NutrientCalculatorResultComponent';
import LogFoodContainer from '@/components/app/calculator/LogFoodContainer';

function page() {
    return (
        <div
            className='basis-full  gap-2 p-10 md:p-5 lg:p-5  
                       flex flex-col md:flex-row lg:flex-row '
        >
            <NutrientCalculatorResultComponent />
            <LogFoodContainer />
        </div>
    );
}

export default page;

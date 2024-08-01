import React from 'react';
import ProgressBarWLabel from '@/components/ProgressBarWLabel';

function NutrientCalculatorResultComponent() {
    return (
        <div
            className='basis-full md:basis-6/12 lg:basis-6/12 
            border-0 rounded-lg bg-blue-700 shadow-lg
            flex flex-row gap-4 '
        >
            <div className='basis-6/12 flex flex-col justify-center items-center p-5 text'>
                <p className='text-slate-100 font-bold text-3xl'>1,750</p>
                <p className='text-slate-100 font-semibold text-base italic'>
                    Total Calories
                </p>
            </div>
            <div className='basis-6/12 flex flex-col justify-center py-2 px-4'>
                <ProgressBarWLabel
                    label='Carbs'
                    width='30%'
                    labelClassName='text-green-500'
                    progressClassName='bg-green-500'
                />
                <ProgressBarWLabel
                    label='Protein'
                    width='50%'
                    labelClassName='text-orange-500'
                    progressClassName='bg-orange-500'
                />
                <ProgressBarWLabel
                    label='Fat'
                    width='10%'
                    labelClassName='text-cyan-500'
                    progressClassName='bg-cyan-500'
                />
                <ProgressBarWLabel
                    label='Sodium'
                    width='5%'
                    labelClassName='text-violet-500'
                    progressClassName='bg-violet-500'
                />
                <ProgressBarWLabel
                    label='Fiber'
                    width='5%'
                    labelClassName='text-fuchsia-700'
                    progressClassName='bg-fuchsia-600'
                />
            </div>
        </div>
    );
}

export default NutrientCalculatorResultComponent;

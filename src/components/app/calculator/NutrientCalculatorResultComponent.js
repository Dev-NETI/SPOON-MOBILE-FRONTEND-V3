import React, { useEffect, useState } from 'react';
import ProgressBarWLabel from '@/components/ProgressBarWLabel';
import { useDietaryReferenceValue } from '@/hooks/api/dietary-reference-value';

function NutrientCalculatorResultComponent({ data }) {
    const { index } = useDietaryReferenceValue();
    const [driData, setDriData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await index();
            setDriData(data);
        };
        fetchData();
    }, []);

    return (
        <div
            className='basis-full md:basis-6/12 lg:basis-6/12 
            border-0 rounded-lg bg-blue-700 shadow-lg
            flex flex-row gap-4 '
        >
            <div className='basis-6/12 flex flex-col justify-center items-center p-5 '>
                <p className='text-slate-100 font-bold text-3xl'>
                    {data.totalCalories.toFixed(2)}
                </p>
                <p className='text-slate-100 font-semibold text-base italic'>
                    Total Calories
                </p>
            </div>
            <div className='basis-6/12 flex flex-col justify-center py-2 px-4'>
                <ProgressBarWLabel
                    label='Carbs'
                    labelClassName='text-green-500'
                    progressClassName='bg-green-500'
                    value={data.totalCarbs}
                    appropriateValue={
                        data.totalCarbs !== 0 ? driData.carbohydrate : 0
                    }
                />
                <ProgressBarWLabel
                    label='Protein'
                    labelClassName='text-orange-500'
                    progressClassName='bg-orange-500'
                    value={data.totalProtein}
                    appropriateValue={
                        data.totalProtein !== 0 ? driData.protein : 0
                    }
                />
                <ProgressBarWLabel
                    label='Fat'
                    labelClassName='text-cyan-500'
                    progressClassName='bg-cyan-500'
                    value={data.totalFat}
                    appropriateValue={data.totalFat !== 0 ? driData.fat : 0}
                />
                <ProgressBarWLabel
                    label='Sodium'
                    labelClassName='text-violet-500'
                    progressClassName='bg-violet-500'
                    value={data.totalSodium}
                    appropriateValue={
                        data.totalSodium !== 0 ? driData.sodium : 0
                    }
                />
                <ProgressBarWLabel
                    label='Fiber'
                    labelClassName='text-fuchsia-700'
                    progressClassName='bg-fuchsia-600'
                    value={data.totalFiber}
                    appropriateValue={data.totalFiber !== 0 ? driData.fiber : 0}
                />
            </div>
        </div>
    );
}

export default NutrientCalculatorResultComponent;

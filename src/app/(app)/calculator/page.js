import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import CardListItem from '@/components/app/calculator/CardListItem';

function Calculator() {
    return (
        <div>
            <Card className=' m-4 md:mx-20 md:mt-10 lg:mx-20 lg:mt-10'>
                <CardHeader>
                    <h1 className='font-bold text-xl text-center md:text-start lg:text-start'>
                        Calculator
                    </h1>
                </CardHeader>
                <CardContent className='p-4 grid grid-cols-4 gap-4'>
                    <CardListItem
                        title='BMI Calculator'
                        className='col-span-2'
                        href='/calculator/bmi'
                    />
                    <CardListItem
                        title='Calorie Calculator'
                        className='col-start-3 col-span-2'
                        href='/calculator/calorie'
                    />
                    <CardListItem
                        title='Blood Pressure Tracker'
                        className='col-span-2'
                        href='/calculator/blood-pressure-tracker'
                    />
                    <CardListItem
                        title='Nutrient Calculator'
                        className='col-start-3 col-span-2'
                        href='/calculator/nutrient-calculator'
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default Calculator;

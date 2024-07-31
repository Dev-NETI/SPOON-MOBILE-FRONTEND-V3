import React from 'react';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

function BmiHistoryListItem({ data }) {
    return (
        <>
            <Card className='flex flex-row justify-between gap-4 p-4 md:p-2 lg:p-2'>
                <CardTitle>
                    <p className='font-bold text-base md:text-lg lg:text-lg text-stone-800'>
                        {data.bmi}
                    </p>
                </CardTitle>
                <CardDescription className='flex flex-col gap-2 justify-end items-end'>
                    <p className='font-semibold text-sm md:text-lg lg:text-lg text-stone-800'>
                        {data.bmi_category?.name}
                    </p>
                    <p className='text-xs md:text-lg lg:text-lg text-stone-600 italic'>
                        {data.created_at}
                    </p>
                </CardDescription>
            </Card>
        </>
    );
}

export default BmiHistoryListItem;

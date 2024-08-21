'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import food1 from '../../../../../public/assets/app/recipes/01 BANH MI.jpg';
import { Card, CardContent } from '@/components/ui/card';
import icon1 from '../../../../../public/images/cooking.png';
import icon2 from '../../../../../public/images/spoon.png';
import icon3 from '../../../../../public/images/group.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function page() {
    const [value, setValue] = React.useState(2);
    return (
        <div className='flex flex-col p-2 sm:p-3 md:p-8'>
            <div className='grid'>
                <h1 className='text-3xl font-semibold text-gray-900 text-left'>
                    Chicken Curry with Onion Garlic
                </h1>
                <div className='flex items-center space-x-2'>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='font-light mb-1'>{value}/5(163)</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Image
                        src={food1}
                        alt='Chicken Curry'
                        height={400}
                        className='rounded-md hover:brightness-75 w-full shadow-md'
                    />

                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-1 gap-2'>
                        {[
                            { label: 'Category', value: 'Main Course' },
                            { label: 'Best Served', value: 'Lunch' },
                            { label: 'No. of Servings', value: '2 pax' },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className='hover:shadow-lg transition-shadow duration-300 shadow-md'
                            >
                                <CardContent className='p-4'>
                                    <div className='flex justify-center mt-4'>
                                        <Image
                                            src={
                                                index === 0
                                                    ? icon1
                                                    : index === 1
                                                      ? icon2
                                                      : index === 3
                                                        ? icon2
                                                        : icon3
                                            }
                                            alt='Icon'
                                            height={50}
                                            className='rounded-md contrast-50 filter grayscale-0'
                                        />
                                    </div>
                                    <p className='text-center font-bold text-sm mt-2 text-blue-800'>
                                        {item.label}
                                    </p>
                                    <p className='text-center text-sm text-gray-600 mt-1'>
                                        {item.value}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;

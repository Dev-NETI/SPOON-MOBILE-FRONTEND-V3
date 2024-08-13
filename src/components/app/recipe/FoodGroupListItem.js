import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

function FoodGroupListItem({ category, imagePath }) {
    return (
        <Box className='animate-fade-up animate-once animate-duration-1000'>
            <a href='/recipe-view/1'>
                <div className='relative h-48 w-full '>
                    <Image
                        src={imagePath}
                        alt='flag'
                        fill
                        className='object-cover rounded-md hover:brightness-75'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                        <p className='text-white text-center'>{category}</p>
                    </div>
                </div>
            </a>
        </Box>
    );
}

export default FoodGroupListItem;

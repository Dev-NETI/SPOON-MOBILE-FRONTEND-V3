import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import Link from 'next/link';

function RecipeCardComponent({ label, imagePath, href = '#' }) {
    return (
        <Box className='animate-fade-up animate-once animate-duration-1000'>
            <Link href={href}>
                <div className='relative h-48 w-full '>
                    <Image
                        src={imagePath}
                        alt='flag'
                        fill
                        className='object-cover rounded-md hover:brightness-75'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                        <p className='text-white text-center'>{label}</p>
                    </div>
                </div>
            </Link>
        </Box>
    );
}

export default RecipeCardComponent;

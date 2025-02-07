import React, { useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import Link from 'next/link';

function RecipeCardComponent({ label, imagePath, href = '#', delay = 200 }) {
    const [isImageError, setIsImageError] = useState(false);

    return (
        <Box
            className={`animate-fade-up animate-once animate-duration-1000`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <Link href={href}>
                <div className='relative h-48 w-full'>
                    {!isImageError && (
                        <Image
                            src={
                                `${process.env.NEXT_PUBLIC_BACKEND_URL}` +
                                '/storage/' +
                                imagePath
                            }
                            alt='Recipe image'
                            fill
                            className='object-cover rounded-md hover:brightness-75'
                            onError={() => setIsImageError(true)}
                        />
                    )}
                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                        <p className='text-white text-center text-xs md:text-base lg:text-base '>
                            {label}
                        </p>
                    </div>
                </div>
            </Link>
        </Box>
    );
}

export default RecipeCardComponent;

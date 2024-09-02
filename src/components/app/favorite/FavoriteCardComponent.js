import React from 'react';
import Image from 'next/image';
// import HeartSvg from '/public/assets/app/icons/heart-fill.svg';
import flag from '/public/assets/app/icons/armenia flag.png';
import addCard from '/public/images/addCard.png';
import { useAuth } from '@/hooks/auth';

function FavoriteCardComponent({
    recipe = null,
    src = null,
    url = null,
    alt = null,
    originname = null,
    originflag = null,
}) {
    if (recipe == null || src == null || alt == null || url == null) {
        return (
            <a href='/recipe' className='flex justify-center items-center'>
                 <Image
                    className='hover:scale-110 w-28 duration-200 ease-in-out shadow-lg rounded-full'
                    src={addCard}
                     alt='ff'
                  />
            </a>
        );
    } else {
        return (
            <a
                href={url}
                className='bg-slate-50 rounded-lg md:rounded-3xl shadow-md shadow-slate-200 hover:-translate-y-1 duration-300 ease-in-out'
            >
                <Image
                    src={src}
                    width={1000}
                    height={100}
                    alt={alt}
                    className='object-cover h-24 rounded-t-lg md:rounded-t-3xl sm:h-56 pb-1'
                />
                <div className='grid grid-cols-2 p-2 shadow-sm'>
                    <p className='ms-2 font-semibold text-sm sm:text-md text-stone-800'>
                        {recipe}
                    </p>
                    {/* <Image
                        className='justify-self-end w-4 sm:w-5 sm:me-6'
                        src={HeartSvg}
                    ></Image> */}
                </div>
                <div className='grid grid-cols-1 my-2 md:my-2 lg:grid-cols-2 sm:mb-3'>
                    <div className='flex items-center'>
                        <Image
                            className='w-5 sm:w-8 rounded-full ms-2 border'
                            width={100}
                            height={100}
                            src={originflag}
                        ></Image>
                        <p className='ms-2 text-sm '>{originname}</p>
                    </div>
                    <div className='bg-blue-950 m-2 md:m-1 rounded-md sm:rounded-2xl me-2'>
                        <p className='text-white text-sm text-center mt-1'>
                            Main Course
                        </p>
                    </div>
                </div>
            </a>
        );
    }
}

export default FavoriteCardComponent;

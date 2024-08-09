'use client';
import Input from '@/components/Input';
import InputWithIcon from '@/components/InputWithIcon';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import food1 from '../../../../public/assets/app/recipes/01 BANH MI.jpg';
import food2 from '../../../../public/assets/app/recipes/TOSHIKOSHI SOBA (NEW YEAR_S EVE NOODLES).jpg';
import Image from 'next/image';
import { Box } from '@mui/material';

const Profile = () => {
    return (
        <>
            <div className='flex flex-row md:justify-end'>
                <div className='basis-full md:basis-1/2 lg:basis-1/4'>
                    <InputWithIcon
                        icon='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        label={'Search'}
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
                <Box className='animate-fade-up animate-once animate-duration-1000'>
                    <a href='/recipe-view/1'>
                        <div className='relative h-48 w-full '>
                            <Image
                                src={food1}
                                alt='flag'
                                layout='fill'
                                className='object-cover rounded-md hover:brightness-75'
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                                <p className='text-white text-center'>
                                    Category
                                </p>
                            </div>
                        </div>
                    </a>
                </Box>
                <Box className='animate-fade-up animate-once animate-duration-1000 animate-delay-100'>
                    <a href='/recipe-view/1'>
                        <div className='relative h-48 w-full'>
                            <Image
                                src={food2}
                                alt='flag'
                                layout='fill'
                                className='object-cover rounded-md hover:brightness-75'
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                                <p className='text-white text-center'>
                                    Category
                                </p>
                            </div>
                        </div>
                    </a>
                </Box>
                <Box className='animate-fade-up animate-once animate-duration-1000 animate-delay-200'>
                    <div className='relative h-48 w-full'>
                        <Image
                            src={food1}
                            alt='flag'
                            layout='fill'
                            className='object-cover rounded-md hover:brightness-75'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                            <p className='text-white text-center'>Category</p>
                        </div>
                    </div>
                </Box>
                <Box className='animate-fade-up animate-once animate-duration-1000 animate-delay-300'>
                    <div className='relative h-48 w-full'>
                        <Image
                            src={food1}
                            alt='flag'
                            layout='fill'
                            className='object-cover rounded-md hover:brightness-75'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                            <p className='text-white text-center'>Category</p>
                        </div>
                    </div>
                </Box>
                <Box className='animate-fade-up animate-once animate-duration-1000 animate-delay-400'>
                    <div className='relative h-48 w-full'>
                        <Image
                            src={food2}
                            alt='flag'
                            layout='fill'
                            className='object-cover rounded-md hover:brightness-75'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                            <p className='text-white text-center'>Category</p>
                        </div>
                    </div>
                </Box>
                <Box className='animate-fade-up animate-once animate-duration-1000 animate-delay-500'>
                    <div className='relative h-48 w-full'>
                        <Image
                            src={food1}
                            alt='flag'
                            layout='fill'
                            className='object-cover rounded-md hover:brightness-75'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-md'>
                            <p className='text-white text-center'>Category</p>
                        </div>
                    </div>
                </Box>
            </div>
        </>
    );
};

export default Profile;

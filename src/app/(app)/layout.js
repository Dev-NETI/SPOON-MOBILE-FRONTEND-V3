'use client';

import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';
import BottomNavigation from '@/components/app/BottomNavigation';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' });

    if (!user) {
        return <Loading />;
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='flex flex-col'>
                <header className='sticky top-0 bg-blue-800 flex items-center justify-between px-2 py-2 z-50 stroke-white shadow-md'>
                    <Image
                        className='mt-12 md:mt-0 lg:mt-0'
                        src={logo}
                        alt='Spoon Logo'
                        width={150}
                        height={150}
                    />
                    <div className='flex flex-row items-center mt-12 md:mt-0 lg:mt-0'>
                        <Avatar>
                            <AvatarImage
                                src='https://github.com/shadcn.png'
                                alt='@shadcn'
                            />
                            <AvatarFallback>
                                {user.f_name} {user.l_name}
                            </AvatarFallback>
                        </Avatar>
                        <p className='ml-2 text-white'>
                            {user.f_name} {user.l_name}
                        </p>
                    </div>
                </header>
                <div className='basis-full '>{children}</div>
                <BottomNavigation />
            </div>
        </div>
    );
};

export default AppLayout;

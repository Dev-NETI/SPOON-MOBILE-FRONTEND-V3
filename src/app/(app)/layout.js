'use client';
import * as React from 'react';
import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';
import BottomNavigation from '@/components/app/BottomNavigation';
import { Toaster } from '@/components/ui/toaster';
import { useFirstLoginHook } from '@/hooks/firstLoginHook';
import { useEffect, useState } from 'react';
import SideNavigation from '@/components/app/SideNavigation';
import TopBar from '@/components/app/TopBar';

const AppLayout = ({ children }) => {
    useFirstLoginHook();
    const { user } = useAuth({ middleware: 'auth' });
    const [isMobileView, setIsMobileView] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!user) {
        return <Loading />;
    }

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='flex flex-col'>
                <TopBar
                    isDrawerOpen={isDrawerOpen}
                    handleDrawerOpen={handleDrawerOpen}
                    isMobileView={isMobileView}
                />
                <div
                    className='basis-full 
                mt-24 mb-16
                md:mt-16 md:pl-16 lg:mt-16 lg:pl-16
                md:mb-0 lg:mb-0'
                >
                    {children}
                </div>
                {isMobileView && user.is_first_login !== 1 && (
                    <BottomNavigation />
                )}
                {!isMobileView && user.is_first_login !== 1 && (
                    <SideNavigation
                        open={isDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    />
                )}
                <Toaster />
            </div>
        </div>
    );
};

export default AppLayout;

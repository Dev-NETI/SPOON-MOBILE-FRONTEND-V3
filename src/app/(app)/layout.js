'use client';
import * as React from 'react';
import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';
import BottomNavigation from '@/components/app/BottomNavigation';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';
import SideNavigation from '@/components/app/SideNavigation';
import TopBar from '@/components/app/TopBar';
import Box from '@mui/material/Box';

const AppLayout = ({ children }) => {
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
        <>
            {!isMobileView && (
                <Box sx={{ display: 'flex' }}>
                    <TopBar
                        isDrawerOpen={isDrawerOpen}
                        handleDrawerOpen={handleDrawerOpen}
                        isMobileView={isMobileView}
                    />

                    <SideNavigation
                        open={isDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    />
                    <Box component='main' sx={{ flexGrow: 1, py: 8 }}>
                        <div>{children}</div>
                    </Box>
                </Box>
            )}
            {isMobileView && (
                <div className='min-h-screen bg-gray-100'>
                    <div className='flex flex-col'>
                        <TopBar
                            isDrawerOpen={isDrawerOpen}
                            handleDrawerOpen={handleDrawerOpen}
                            isMobileView={isMobileView}
                        />
                        <BottomNavigation />
                        <div
                            className='basis-full
                    mt-24 mb-16
                    md:mt-16 md:pl-16 lg:mt-16 lg:pl-16
                    md:mb-0 lg:mb-0'
                        >
                            {children}
                        </div>

                        <Toaster />
                    </div>
                </div>
            )}
        </>
    );
};

export default AppLayout;

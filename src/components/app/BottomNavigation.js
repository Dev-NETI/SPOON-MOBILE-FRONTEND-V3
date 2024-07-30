'use client';
import React, { useState } from 'react';
import BottomNavigationItem from './BottomNavigationItem';

function BottomNavigation() {
    const [activeLink, setActiveLink] = useState(null);
    return (
        <div className='fixed bottom-4 left-3 right-3 z-50 bg-white shadow-md rounded-md px-3'>
            <div className='flex h-full justify-center items-center max-w-lg mx-auto'>
                <BottomNavigationItem
                    route='/dashboard'
                    label='Home'
                    active={activeLink === 'Home'}
                    onClick={() => setActiveLink('Home')}
                    icon='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z'
                />
                <BottomNavigationItem
                    route='/recipe'
                    label='Recipe'
                    active={activeLink === 'Recipe'}
                    onClick={() => setActiveLink('Recipe')}
                    icon='M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z'
                />
                <BottomNavigationItem
                    route='/calculator'
                    label='Calculator'
                    active={activeLink === 'Calculator'}
                    onClick={() => setActiveLink('Calculator')}
                    icon='M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z'
                />
                <BottomNavigationItem
                    route='/dashboard'
                    label='Favorite'
                    active={activeLink === 'Favorite'}
                    onClick={() => setActiveLink('Favorite')}
                    icon='m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z'
                />
                <BottomNavigationItem
                    route='/profile'
                    label='Me'
                    active={activeLink === 'Me'}
                    onClick={() => setActiveLink('Me')}
                    icon='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                />
            </div>
        </div>
    );
}

export default BottomNavigation;

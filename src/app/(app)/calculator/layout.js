import React from 'react';
import Disclaimer from '@/components/app/calculator/disclaimer';

function layout({ children }) {
    return (
        <div
            className='flex flex-col bg-gray-100
        md:p-5 lg:p-5 '
        >
            <Disclaimer />
            {children}
        </div>
    );
}

export default layout;

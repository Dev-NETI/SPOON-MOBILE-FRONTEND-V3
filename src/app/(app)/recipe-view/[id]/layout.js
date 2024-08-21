import React from 'react';

function layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
            <div className='flex-1 bg-slate-50 p-4 achor'>
                <div className='mx-auto max-w-screen-xl'>{children}</div>
            </div>
        </div>
    );
}

export default layout;

import React from 'react';

function ProgressBarWLabel({
    label,
    width,
    labelClassName,
    progressClassName,
}) {
    return (
        <>
            <div className={`${labelClassName} mb-1 text-base font-medium`}>
                {label}
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 '>
                <div
                    className={`${progressClassName} h-2.5 rounded-full`}
                    style={{ width: width }}
                ></div>
            </div>
        </>
    );
}

export default ProgressBarWLabel;

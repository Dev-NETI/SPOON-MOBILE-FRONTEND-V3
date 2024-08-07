import React from 'react';
import { motion } from 'framer-motion';
import { calculatePercentage } from '@/lib/utils';

function ProgressBarWLabel({
    label,
    labelClassName,
    progressClassName,
    value,
    appropriateValue,
}) {
    const width = calculatePercentage(value, appropriateValue);
    const progressText = `${value.toFixed(2)} g / ${appropriateValue} g`;

    return (
        <>
            <div className={`${labelClassName} mb-1 text-xs font-semibold`}>
                {label} - {progressText}
            </div>
            <div className='w-full bg-gray-200 rounded-full h-4 mb-4'>
                <motion.div
                    className={`${progressClassName} h-4 rounded-full text-center text-xs items-center text-stone-900`}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 0.5 }}
                >
                    {width}%
                </motion.div>
            </div>
        </>
    );
}

export default ProgressBarWLabel;

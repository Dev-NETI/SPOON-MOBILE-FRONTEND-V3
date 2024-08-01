'use client';
import React, { useState } from 'react';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

function LogFoodCardComponent({
    title,
    cardClassName,
    consumedCalories,
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.Card
                className={`${cardClassName} p-4 rounded-xl shadow-lg`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className='flex flex-row justify-between '
                    animate={{ rotate: isOpen ? 360 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <CardTitle className='font-bold text-slate-100'>
                        {title}
                    </CardTitle>
                    <CardDescription className='text-slate-100 font-semibold'>
                        {consumedCalories}
                    </CardDescription>
                </motion.div>
            </motion.Card>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                    isOpen
                        ? { height: 'auto', opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className='overflow-hidden rounded-xl shadow-lg'
            >
                <div className='p-4 bg-white'>{children}</div>
            </motion.div>
        </>
    );
}

export default LogFoodCardComponent;

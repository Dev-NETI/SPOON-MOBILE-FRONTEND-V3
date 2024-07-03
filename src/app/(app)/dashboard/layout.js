import React from 'react'
import Image from 'next/image'
import icon from '../../../../public/assets/app/icons/plate.png'

function layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-blue-800 flex flex-col items-center text-center p-4">
                <p className="text-slate-50 text-2xl font-bold md:text-3xl lg:text-3xl animate-fade-up animate-once animate-duration-1000">
                    The Seafarers Cookbook
                </p>
                <p className="text-slate-50 mt-2 text-base animate-fade-up animate-once animate-duration-1000">
                    Tasty Recipes for a Healthy Onboard Life
                </p>
                <Image
                    src={icon}
                    width={300}
                    height={300}
                    className="mt-4 shadow-sm animate-spin-slow"
                    alt="Spoon Logo"
                />
            </div>
            <div className="flex-1 bg-slate-50 p-4">{children}</div>
        </div>
    )
}

export default layout

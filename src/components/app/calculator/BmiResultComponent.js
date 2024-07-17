import React from 'react'
import Image from 'next/image'

function BmiResultComponent() {
    const chartImage = '/assets/app/calculator/banner-image-bmi.png'

    return (
        <div
            className="basis-full md:basis-6/12 lg:basis-6/12 
            border-0 rounded-lg bg-gray-50 shadow-lg
            flex justify-center items-center gap-4">
            <Image
                src={chartImage}
                height={200}
                width={200}
                alt="BMI Chart"
                priority
            />
        </div>
    )
}

export default BmiResultComponent

import React from 'react'
import AnthropometryCard from '@/components/app/calculator/AnthropometryCard'
import BmiResultComponent from '@/components/app/calculator/BmiResultComponent'

function Bmi() {
    return (
        <div
            className="basis-full  gap-2 p-5  
        flex flex-col md:flex-row lg:flex-row ">
            <BmiResultComponent />
            <AnthropometryCard />
        </div>
    )
}

export default Bmi

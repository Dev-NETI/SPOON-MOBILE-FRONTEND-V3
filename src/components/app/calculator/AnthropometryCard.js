import React from 'react'
import AnthropometryInputComponent from './AnthropometryInputComponent'
import Button from '@/components/Button'

function AnthropometryCard() {
    return (
        <div
            className="basis-full md:basis-6/12 lg:basis-6/12 
            border-0 rounded-lg bg-gray-50 shadow-lg 
            flex flex-col">
            <div className="basis-full p-4">
                <Button type="button" className="float-end">
                    History
                </Button>
            </div>

            <div className="basis-full flex flex-row gap-4">
                <AnthropometryInputComponent
                    title="Standard"
                    heightLabel="Height(ft)"
                    height="5'2"
                    weightLabel="Weight(lbs)"
                    weight="116"
                />
                <AnthropometryInputComponent
                    title="Metric"
                    heightLabel="Height(cm)"
                    height="160"
                    weightLabel="Weight(kg)"
                    weight="60"
                />
            </div>
        </div>
    )
}

export default AnthropometryCard

import React from 'react'

function AnthropometryInputComponent({
    title,
    heightLabel,
    height,
    weightLabel,
    weight,
}) {
    return (
        <div className="basis-6/12 flex flex-col gap-4 p-2">
            <p className="basis-full font-semibold text-gray-700">{title}</p>
            <div className="basis-full bg-gray-200 p-4">
                <p className=" text-sm text-gray-700">{heightLabel}</p>
                <p className=" text-xl text-slate-800">{height}</p>
            </div>
            <div className="basis-full bg-gray-200 p-4">
                <p className=" text-sm text-gray-700">{weightLabel}</p>
                <p className=" text-xl text-slate-800">{weight}</p>
            </div>
        </div>
    )
}

export default AnthropometryInputComponent

import React from 'react'

function InputGroup({ editMode = false, title, initialValue, className }) {
    return (
        <div className={`${className} bg-gray-200 p-2`}>
            <p className=" text-sm text-gray-700">{title}</p>
            <p className=" text-lg text-slate-800">{initialValue}</p>
        </div>
    )
}

export default InputGroup

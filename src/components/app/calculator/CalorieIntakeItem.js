import React from 'react'

function CalorieIntakeItem({ description, className }) {
    return (
        <div className={className}>
            <p className="font-bold text-gray-900 text-sm p-2">{description}</p>
        </div>
    )
}

export default CalorieIntakeItem

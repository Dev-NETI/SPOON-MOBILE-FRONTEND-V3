import React from 'react'

function layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 bg-slate-50 p-4">{children}</div>
        </div>
    )
}

export default layout

import React from 'react';
import Label from './Label';
import RedBadge from './RedBadge';

function DropdownGroup({ label, errorMessage = null, data = null, ...props }) {
    let labelStyle = errorMessage && ' text-red-800 ';
    let inputStyle = errorMessage && ' border-red-800 ';

    return (
        <>
            <Label htmlFor='name' className={`${labelStyle} `}>
                {label}
            </Label>

            {/* <Input className={`${inputStyle} block mt-1 w-full`} {...props} /> */}
            <select
                className={`${inputStyle} mt-1 w-full 
                flex h-10  rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent 
                file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                {...props}
            >
                <option value=''>Select</option>
                {data &&
                    data.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
            </select>

            {errorMessage && <RedBadge message={errorMessage} />}
        </>
    );
}

export default DropdownGroup;

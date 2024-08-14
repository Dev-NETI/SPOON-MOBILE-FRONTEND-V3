import React from 'react';
import { Chip } from '@mui/material';

function DrawerFilterList({ label, data = null }) {
    return (
        <div>
            <h1 className='font-semibold text-stone-800'>{label}</h1>
            <div className='grid grid-cols-3 gap-2 py-1'>
                {data &&
                    data.map(item => (
                        <Chip
                            key={item.id}
                            label={item.name}
                            color='primary'
                            variant='outlined'
                        />
                    ))}
            </div>
        </div>
    );
}

export default DrawerFilterList;

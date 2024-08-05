import React from 'react';
import LogFoodListItem from './LogFoodListItem';

function LogFoodList({ data, currentPage, itemsPerPage }) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <>
            {currentItems.map(data => (
                <LogFoodListItem key={data.id} title={data.name} />
            ))}
        </>
    );
}

export default LogFoodList;

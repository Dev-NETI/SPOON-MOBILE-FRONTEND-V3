import React, { useState } from 'react';
import RecipeListItemComponent from './RecipeListItemComponent';

function RecipeListComponent({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const handlePageChange = newPage => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 py-8'>
                {currentItems.map(item => (
                    <RecipeListItemComponent key={item.id} data={item} />
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-4 py-2 mr-2 bg-gray-800 text-white rounded disabled:opacity-50'
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage * itemsPerPage >= data.length}
                    className='px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50'
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default RecipeListComponent;

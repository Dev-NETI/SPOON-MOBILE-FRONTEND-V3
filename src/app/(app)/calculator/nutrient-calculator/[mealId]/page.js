'use client';
import React, { useEffect, useState } from 'react';
import { useRecipe } from '@/hooks/api/recipe';
import LogFoodList from '@/components/app/calculator/LogFoodList';
import Input from '@/components/Input';
import { NutrientCalculatorContext } from '@/stores/NutrientCalculatorContext';

function LogFood({ params }) {
    const { index: getAllRecipe } = useRecipe();
    const [searchValue, setSearchValue] = useState(null);
    const [recipeData, setRecipeData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    useEffect(() => {
        if (searchValue) {
            const data = recipeData.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredData(data);
        } else {
            const fetchRecipe = async () => {
                const { data } = await getAllRecipe();
                setRecipeData(data);
            };

            fetchRecipe();
        }
    }, [searchValue]);

    const handlePageChange = newPage => {
        setCurrentPage(newPage);
    };

    return (
        <NutrientCalculatorContext.Provider
            value={{
                params,
                currentPage,
                itemsPerPage,
                searchValue,
                filteredData,
                recipeData,
            }}
        >
            <div
                className='bg-white border rounded-xl shadow-lg 
        p-10 md:px-60 lg:px-60 md:pt-10 lg:pt-10 mt-4'
            >
                <div>
                    <Input
                        type='text'
                        className='rounded-full mb-4'
                        placeholder='Search recipe...'
                        onChange={event => setSearchValue(event.target.value)}
                    />
                </div>
                <LogFoodList />
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
                        disabled={
                            currentPage * itemsPerPage >= recipeData.length
                        }
                        className='px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50'
                    >
                        Next
                    </button>
                </div>
            </div>
        </NutrientCalculatorContext.Provider>
    );
}

export default LogFood;

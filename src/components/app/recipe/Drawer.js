import React from 'react';
import Drawer from '@mui/material/Drawer';
import DrawerFilterList from '@/components/app/recipe/DrawerFilterList';
import { useContext } from 'react';
import { RecipeContext } from '@/stores/RecipeContext';
import { Button } from '@/components/ui/button';

function DrawerComponent() {
    const { recipeDataState, isDrawerOpen, setIsDrawerOpen } =
        useContext(RecipeContext);
    return (
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <div className='flex flex-col px-8 p-4'>
                <DrawerFilterList
                    label='Origin'
                    data={recipeDataState.originData}
                    identifier='selectedOriginData'
                />
                <DrawerFilterList
                    label='Best Served'
                    data={recipeDataState.mealHourData}
                    identifier='selectedMealHourData'
                />
                <DrawerFilterList
                    label='Category'
                    data={recipeDataState.mealTypeData}
                    identifier='selectedMealTypeData'
                />
                <DrawerFilterList
                    label='Weather'
                    data={recipeDataState.seasonData}
                    identifier='selectedFoodGroupData'
                />
                <DrawerFilterList
                    label='Food Group'
                    data={recipeDataState.foodGroupData}
                    identifier='selectedSeasonData'
                />
                <div className='flex items-center justify-center py-1'>
                    <Button className='w-full rounded-lg'>Apply Filters</Button>
                </div>
                <div className='flex items-center justify-center py-1'>
                    <h1 className='font-semibold text-blue-700'>
                        Reset Filters
                    </h1>
                </div>
            </div>
        </Drawer>
    );
}

export default DrawerComponent;

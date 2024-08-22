'use client';
import React, { useEffect, useState } from 'react';
import InputWithIcon from '@/components/InputWithIcon';
import TuneIcon from '@mui/icons-material/Tune';
import { useRecipeOrigin } from '@/hooks/api/recipe-origin';
import { useMeal } from '@/hooks/api/meal';
import { useMealType } from '@/hooks/api/meal-type';
import { useFoodGroup } from '@/hooks/api/food-group';
import { useSeason } from '@/hooks/api/season';
import Loading from '../Loading';
import { RecipeContext } from '@/stores/RecipeContext';
import DrawerComponent from '@/components/app/recipe/Drawer';
import { useRecipe } from '@/hooks/api/recipe';
import RecipeListComponent from '@/components/app/recipe/RecipeListComponent';

function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { index: getAllOrigin } = useRecipeOrigin();
    const { index: getAllMeal } = useMeal();
    const { index: getAllMealType } = useMealType();
    const { index: getAllFoodGroup } = useFoodGroup();
    const { index: getAllSeason } = useSeason();
    const { index: getAllRecipe } = useRecipe();
    const [recipeDataState, setRecipeDataState] = useState({
        originData: [],
        mealHourData: [],
        mealTypeData: [],
        foodGroupData: [],
        seasonData: [],
        allRecipeData: [],
        filteredRecipeData: [],
    });
    const [recipeState, setRecipeState] = useState({
        loading: true,
        selectedOriginData: [],
        selectedMealHourData: [],
        selectedMealTypeData: [],
        selectedFoodGroupData: [],
        selectedSeasonData: [],
    });

    useEffect(() => {
        const fetchFilterData = async () => {
            const { data: originData } = await getAllOrigin();
            const { data: mealHourData } = await getAllMeal();
            const { data: mealTypeData } = await getAllMealType();
            const { data: foodGroupData } = await getAllFoodGroup();
            const { data: seasonData } = await getAllSeason();
            const { data: allRecipeData } = await getAllRecipe();
            setRecipeDataState(prevState => ({
                ...prevState,
                originData: originData,
                mealHourData: mealHourData,
                mealTypeData: mealTypeData,
                foodGroupData: foodGroupData,
                seasonData: seasonData,
                allRecipeData: allRecipeData,
            }));
            setRecipeState(prevState => ({
                ...prevState,
                loading: false,
            }));
        };

        fetchFilterData();
    }, [
        getAllOrigin,
        getAllMeal,
        getAllMealType,
        getAllFoodGroup,
        getAllSeason,
        getAllRecipe,
    ]);

    useEffect(() => {
        console.log(recipeDataState.filteredRecipeData);
    }, [recipeDataState.filteredRecipeData]);

    const ui = recipeState.loading ? (
        <Loading />
    ) : (
        <RecipeContext.Provider
            value={{
                recipeDataState,
                setRecipeDataState,
                isDrawerOpen,
                setIsDrawerOpen,
                recipeState,
                setRecipeState,
            }}
        >
            <div>
                <InputWithIcon
                    icon='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    label={'Search'}
                />
            </div>
            <div className='flex flex-row gap-1'>
                {recipeDataState.filteredRecipeData.length > 0 ? (
                    <div className='flex items-center justify-center py-1'>
                        <h1
                            className='font-semibold text-blue-700'
                            onClick={() =>
                                setRecipeDataState(prevState => ({
                                    ...prevState,
                                    filteredRecipeData: [],
                                }))
                            }
                        >
                            Reset Filters
                        </h1>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className='py-2 px-5 bg-gray-300 rounded-md'
                    >
                        <TuneIcon color='disabled' />
                    </button>
                )}
            </div>
            <DrawerComponent />
            <div className='py-5'>
                <RecipeListComponent
                    data={
                        recipeDataState.filteredRecipeData.length > 0
                            ? recipeDataState.filteredRecipeData
                            : recipeDataState.allRecipeData
                    }
                />
            </div>
        </RecipeContext.Provider>
    );
    return ui;
}

export default Page;

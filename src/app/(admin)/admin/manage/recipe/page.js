'use client';

import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Badge, Button, Stack } from '@mui/material';
import { useRecipe } from '@/hooks/api/recipe';
import { CancelOutlined, CheckCircleOutline } from '@mui/icons-material';
import AddRecipeModal from './AddRecipeModal';

function page() {
    const [recipeListState, setRecipeListState] = useState({
        recipeData: [],
    });
    const { index: getRecipeData } = useRecipe('all-recipe');

    useEffect(() => {
        const fetchRecipeData = async () => {
            const { data } = await getRecipeData();
            setRecipeListState(prevState => ({
                ...prevState,
                recipeData: data,
            }));
        };

        fetchRecipeData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'image',
            headerName: 'IMAGE',
            width: 100,
            renderCell: params => (
                <Avatar
                    alt={params.row.recipeName}
                    src={params.value}
                    sx={{ width: 60, height: 60 }}
                    variant='rounded'
                />
            ),
        },
        { field: 'recipeName', headerName: 'RECIPE NAME', width: 350 },
        { field: 'mealType', headerName: 'MEAL TYPE', width: 130 },
        { field: 'recipeOrigin', headerName: 'RECIPE ORIGIN', width: 130 },
        { field: 'breakfast', headerName: 'BREAKFAST', width: 130 },
        { field: 'lunch', headerName: 'LUNCH', width: 100 },
        { field: 'dinner', headerName: 'DINNER', width: 100 },
        { field: 'snack', headerName: 'SNACK', width: 100 },
        { field: 'carbohydrate', headerName: 'CARBOHYDRATE', width: 100 },
        { field: 'protein', headerName: 'PROTEIN', width: 100 },
        { field: 'fat', headerName: 'FAT', width: 100 },
        { field: 'calories', headerName: 'CALORIES', width: 100 },
        { field: 'sodium', headerName: 'SODIUM', width: 100 },
        { field: 'fiber', headerName: 'FIBER', width: 100 },
        { field: 'serving', headerName: 'NO. OF SERVING', width: 100 },
        {
            field: 'is_active',
            headerName: 'STATUS',
            width: 150,
            renderCell: params => (
                <Badge
                    variant='dot'
                    color={params.value === 'Yes' ? 'success' : 'error'}
                >
                    {params.value === 'Yes' ? (
                        <CheckCircleOutline fontSize='small' color='success' />
                    ) : (
                        <CancelOutlined fontSize='small' color='error' />
                    )}
                </Badge>
            ),
        },
    ];

    const rows = recipeListState.recipeData.map((recipe, index) => ({
        id: index + 1, // Assuming there's no unique ID in the data, otherwise use recipe.id
        image: recipe.image_path, // Assuming the recipe image URL is stored in the field 'image_url'
        recipeName: recipe.name, // Adjust the field name according to your data structure
        mealType: recipe.meal_type.name,
        recipeOrigin: recipe.recipe_origin.name,
        breakfast: recipe.breakfast === 0 ? 'No' : 'Yes',
        lunch: recipe.lunch === 0 ? 'No' : 'Yes',
        dinner: recipe.dinner === 0 ? 'No' : 'Yes',
        snack: recipe.snack === 0 ? 'No' : 'Yes',
        carbohydrate: recipe.carbohydrate,
        protein: recipe.protein,
        fat: recipe.fat,
        calories: recipe.calories,
        sodium: recipe.sodium,
        fiber: recipe.fiber,
        serving: recipe.number_of_serving,
        is_active: recipe.is_active === 0 ? 'No' : 'Yes',
    }));

    return (
        <div>
            <Stack
                direction='row'
                spacing={1}
                sx={{
                    justifyContent: 'flex-end',
                    alignItems: 'baseline',
                    marginTop: '10px',
                }}
            >
                <AddRecipeModal />
                <Button variant='contained' color='error'>
                    Delete Recipe
                </Button>
            </Stack>

            <div style={{ height: 800, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                    }}
                    pageSizeOptions={[20, 40]}
                    checkboxSelection
                    sx={{ overflow: 'clip', marginTop: '10px' }}
                />
            </div>
        </div>
    );
}

export default page;

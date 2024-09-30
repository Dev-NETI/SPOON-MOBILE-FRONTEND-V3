'use client';

import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
    Avatar,
    Badge,
    Button,
    Stack,
    Typography,
    Box,
    Chip,
} from '@mui/material';
import { useRecipe } from '@/hooks/api/recipe';
import {
    CancelOutlined,
    CheckCircleOutline,
    EditOutlined,
    BlockOutlined,
} from '@mui/icons-material';
import AddRecipeModal from './AddRecipeModal';
import { RecipeContext } from '@/stores/RecipeContext';

function RecipeManagementPage() {
    const [recipeListState, setRecipeListState] = useState({
        recipeData: [],
        responseStore: true,
    });
    const { index: getRecipeData, store: storeRecipe } = useRecipe();

    useEffect(() => {
        const fetchRecipeData = async () => {
            const { data } = await getRecipeData();
            setRecipeListState(prevState => ({
                ...prevState,
                recipeData: data,
                responseStore: false,
            }));
        };

        if (recipeListState.responseStore === true) {
            fetchRecipeData();
        }
    }, [recipeListState.responseStore]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'image',
            headerName: 'Image',
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
        { field: 'recipeName', headerName: 'Recipe Name', width: 700 },
        {
            field: 'mealType',
            headerName: 'Meal Type',
            width: 200,
            renderCell: params => (
                <Chip label={params.value} color='primary' variant='outlined' />
            ),
        },
        {
            field: 'recipeOrigin',
            headerName: 'Origin',
            width: 130,
            renderCell: params => (
                <Chip
                    label={params.value}
                    color='secondary'
                    variant='outlined'
                />
            ),
        },
        {
            field: 'is_active',
            headerName: 'Status',
            width: 120,
            renderCell: params => (
                <Chip
                    icon={
                        params.value === 'Yes' ? (
                            <CheckCircleOutline />
                        ) : (
                            <CancelOutlined />
                        )
                    }
                    label={params.value}
                    color={params.value === 'Yes' ? 'success' : 'error'}
                    variant='outlined'
                />
            ),
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 220,
            renderCell: params => (
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'
                    sx={{ mt: 0.5 }}
                >
                    <Button
                        variant='outlined'
                        color='primary'
                        size='small'
                        startIcon={<EditOutlined />}
                        onClick={() => {
                            console.log(params.row);
                        }}
                        sx={{ px: 2, py: 1 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant='outlined'
                        color='error'
                        size='small'
                        startIcon={<BlockOutlined />}
                        onClick={() => {
                            console.log(params.row);
                        }}
                        sx={{ px: 2, py: 1 }}
                    >
                        {params.row.is_active === 'Yes'
                            ? 'Deactivate'
                            : 'Activate'}
                    </Button>
                </Stack>
            ),
        },
    ];

    const baseUrl = 'http://localhost:8000/storage/';

    const rows = recipeListState.recipeData.map((recipe, index) => ({
        id: index + 1,
        image: `${baseUrl}${recipe.image_path}`,
        recipeName: recipe.name,
        mealType: recipe.meal_type.name.toUpperCase(),
        recipeOrigin: recipe.recipe_origin.name,
        serving: recipe.number_of_serving,
        is_active: recipe.is_active === 0 ? 'No' : 'Yes',
    }));

    return (
        <RecipeContext.Provider value={{ storeRecipe, setRecipeListState }}>
            <Box sx={{ p: 3 }}>
                <Typography variant='h4' gutterBottom>
                    Recipe Management
                </Typography>
                <Stack
                    direction='row'
                    spacing={2}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <Typography variant='body1'>
                        Manage your recipes, add new ones, or modify existing
                        recipes.
                    </Typography>
                    <AddRecipeModal />
                </Stack>

                <Box
                    sx={{
                        height: 700,
                        width: '100%',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[10, 20, 50]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        components={{
                            Toolbar: GridToolbar,
                        }}
                        sx={{
                            '& .MuiDataGrid-cell:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </Box>
            </Box>
        </RecipeContext.Provider>
    );
}

export default RecipeManagementPage;

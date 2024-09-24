'use client';

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Container, Grid } from '@mui/material';
import { useMealType } from '@/hooks/api/meal-type';
import RecipeFormComponent from '@/components/admin/recipe/RecipeFormComponent';
import { useRecipeOrigin } from '@/hooks/api/recipe-origin';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function AddRecipeModal() {
    const [DataState, setDataState] = useState({
        meal_type_data: [],
        recipe_origin_data: [],
    });

    const { index: getMealTypeData } = useMealType();
    const { index: getRecipeOriginData } = useRecipeOrigin();

    React.useEffect(() => {
        const fetchMealData = async () => {
            const { data } = await getMealTypeData();
            setDataState(prevState => ({
                ...prevState,
                meal_type_data: data,
            }));
        };

        const fetchRecipeOrignData = async () => {
            const { data } = await getRecipeOriginData();
            setDataState(prevState => ({
                ...prevState,
                recipe_origin_data: data,
            }));
        };

        fetchRecipeOrignData();
        fetchMealData();
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                variant='contained'
                color='success'
                onClick={handleClickOpen}
            >
                ADD RECIPE
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            onClick={handleClose}
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant='h6'
                            component='div'
                        >
                            Add Recipe
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid
                    container
                    spacing={2}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={12} md={8}>
                        <Container maxWidth={false} sx={{ mb: 4, mt: 4 }}>
                            <RecipeFormComponent
                                mode={1}
                                DataState={DataState}
                                handleClose={handleClose}
                            />
                        </Container>
                    </Grid>
                </Grid>
            </Dialog>
        </React.Fragment>
    );
}

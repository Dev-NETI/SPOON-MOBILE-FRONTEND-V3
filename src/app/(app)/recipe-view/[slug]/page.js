'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Chip, Grid, List } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IngridientsTab from './IngridientsTab';
import InstructionTab from './InstructionTab';
import NutritionTab from './NutritionTab';
import { useRecipe } from '@/hooks/api/recipe';
import RecipeViewIconCardComponent from '@/components/app/recipe-view/RecipeViewIconCardComponent';
import Loading from '../../Loading';
import SaveRecipeComponent from '@/components/app/recipe-view/SaveRecipeComponent';
import { useSavedRecipe } from '@/hooks/api/saved-recipe';
import { useAuth } from '@/hooks/auth';
import CustomizedSnackbar from '@/components/CustomSnackBar';
import CommentSection from '@/components/app/recipe-view/CommentSection';
import { useRecipeReview } from '@/hooks/api/recipe-review';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function page({ params }) {
    const { user } = useAuth({ middleware: 'auth' });
    const { show: showRecipe } = useRecipe();
    const [recipeData, setRecipeData] = useState();
    const [isRecipeSaved, setIsRecipeSaved] = useState();
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(2);
    const [snackBarState, setSnackBarState] = useState({
        severity: 'success',
        open: false,
        message: 'This is a success Alert inside a Snackbar!',
    });
    const [tab, setTab] = useState(0);
    const handleChange = (event, newTab) => {
        setTab(newTab);
    };
    const { showWith2Parameter: getIsSaved } = useSavedRecipe('show');
    const { store: saveToFavorite } = useSavedRecipe();
    const { destroy2Parameter: unSaveRecipe } = useSavedRecipe('destroy');
    const { show: showRecipeReview } = useRecipeReview();
    const [recipeReviewData, setRecipeReviewData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await showRecipe(params.slug);
            setRecipeData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (recipeData) {
            const fetchData = async () => {
                const { data: isSavedData } = await getIsSaved(
                    recipeData.id,
                    user.id
                );
                // const { data: isSavedData } = await getIsSaved(1025, 4);
                setIsRecipeSaved(isSavedData);
                const { data: reviewData } = await showRecipeReview(
                    recipeData.id
                );
                setRecipeReviewData(reviewData);
                setLoading(false);
            };
            fetchData();
        }
    }, [recipeData, snackBarState]);

    async function handleSaveRecipe() {
        const object = {
            recipeId: recipeData.id,
            userId: user.id,
        };
        if (isRecipeSaved) {
            //unsave
            const { data: destroyResponse } = await unSaveRecipe(
                recipeData.id,
                user.id
            );
            destroyResponse
                ? setSnackBarState(() => ({
                      severity: 'warning',
                      open: true,
                      message: 'Recipe removed from favorites!',
                  }))
                : setSnackBarState(() => ({
                      severity: 'error',
                      open: true,
                      message: 'Oops! Something went wrong!',
                  }));
        } else {
            //save
            const { data: storeResponse } = await saveToFavorite(object);
            storeResponse
                ? setSnackBarState(() => ({
                      severity: 'success',
                      open: true,
                      message: 'Recipe added to favorites!',
                  }))
                : setSnackBarState(() => ({
                      severity: 'error',
                      open: true,
                      message: 'Oops! Something went wrong!',
                  }));
        }
    }

    function closeSnackBar() {
        setSnackBarState(prevState => ({
            ...prevState,
            open: false,
        }));
    }

    const ui = loading ? (
        <Loading />
    ) : (
        <div className='flex flex-col p-2 sm:p-3 md:p-8'>
            <div className='grid'>
                <div className='flex flex-row gap-4'>
                    <h1 className='text-3xl font-semibold text-gray-900 text-left'>
                        {recipeData?.name}
                    </h1>
                    <SaveRecipeComponent
                        isSaved={isRecipeSaved}
                        onClick={handleSaveRecipe}
                    />
                </div>
                <div className='flex items-center space-x-2'>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='font-light mb-1'>{value}/5(163)</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='relative rounded-xl hover:brightness-75 w-full shadow-md'>
                        <Image
                            src={recipeData?.image_path}
                            alt={recipeData?.name}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-1 gap-2'>
                        <RecipeViewIconCardComponent
                            src='/images/cooking.png'
                            label='Category'
                            value='Main Course'
                        />
                        <RecipeViewIconCardComponent
                            src='/images/spoon.png'
                            label='Best Served'
                            value='Lunch'
                        />
                        <RecipeViewIconCardComponent
                            src='/images/group.png'
                            label='No. of Servings'
                            value='2 pax'
                        />
                    </div>
                    <h1 className='text-3xl font-semibold text-gray-600 text-left'>
                        Best served
                    </h1>
                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 mt-1'>
                        {recipeData?.food_group_list_item?.map(data => (
                            <Chip key={data.id} label={data?.food_group.name} />
                        )) || <p>No food group items available.</p>}
                        {recipeData?.season_list_item?.map(data => (
                            <Chip key={data.id} label={data?.season.name} />
                        )) || <p>No season name available.</p>}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-1 py-2'>
                    <Box>
                        <Box
                            sx={{
                                borderBottom: 1,
                                pt: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Tabs
                                value={tab}
                                onChange={handleChange}
                                variant='scrollable'
                                scrollButtons
                                allowScrollButtonsMobile
                                aria-label='scrollable force tabs example'
                            >
                                <Tab label='Ingredients' {...a11yProps(0)} />
                                <Tab label='Instructions' {...a11yProps(1)} />
                                <Tab label='Nutrition' {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={tab} index={0}>
                            <Grid container>
                                <Grid item xs={12} md={12}>
                                    <List>
                                        <IngridientsTab Item={recipeData} />
                                    </List>
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={tab} index={1}>
                            <Grid item xs={12} md={12}>
                                <List>
                                    <InstructionTab Item={recipeData} />
                                </List>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={tab} index={2}>
                            <NutritionTab data={recipeData} />
                        </CustomTabPanel>
                    </Box>
                    <Box>
                        <CommentSection
                            recipeData={recipeData}
                            setSnackBarState={setSnackBarState}
                            reviewData={recipeReviewData}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
    return (
        <>
            {ui}
            <CustomizedSnackbar
                open={snackBarState.open}
                severity={snackBarState.severity}
                message={snackBarState.message}
                onClose={closeSnackBar}
            />
        </>
    );
}

export default page;

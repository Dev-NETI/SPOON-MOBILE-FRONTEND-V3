'use client';
import React, { useEffect, useState } from 'react';
import FavoriteCardComponent from '@/components/app/favorite/FavoriteCardComponent';
import { useSavedRecipe } from '@/hooks/api/saved-recipe';
import { useAuth } from '@/hooks/auth';
import Loading from '../Loading';
import { miyagi } from 'ldrs';

const FavoriteRecipe = () => {
    miyagi.register();
    const { user } = useAuth({ middleware: 'auth' });
    const { index: getAllSavedRecipe, show: showSavedRecipe } =
        useSavedRecipe();

    const [favoriteRecipeState, setFavoriteRecipeState] = useState({
        loading: true,
        savedRecipeData: [],
    });

    useEffect(() => {
        const fetchSavedRecipe = async () => {
            try {
                const { data } = await showSavedRecipe(user.id);
                setFavoriteRecipeState({
                    loading: false,
                    savedRecipeData: data,
                });
            } catch (error) {
                console.error('Failed to fetch saved recipes:', error);
                setFavoriteRecipeState(prevState => ({
                    ...prevState,
                    loading: false,
                }));
            }
        };

        fetchSavedRecipe();
    }, [user.id]); // Only run the effect when the user id changes

    return favoriteRecipeState.loading ? (
        // Default values shown
        <div className='container flex justify-center items-center h-screen'>
            <l-miyagi
                className='mx-auto'
                size='150'
                stroke='10'
                speed='0.9'
                color='#00023d'
            ></l-miyagi>
        </div>
    ) : (
        <>
            <div className='gap-4 animate-fade-up animate-once animate-duration-1000'>
                <div className='flex justify-center mt-4 shadow-sm h-10'>
                    <p className='font-bold text-stone-800 text-xl'>
                        Favorites
                    </p>
                </div>

                <div className='grid grid-cols-1 pb-20 md:grid-cols-4 xl:grid-cols-5 gap-3 px-5 mt-3 text-center'>
                    {favoriteRecipeState.savedRecipeData.length > 0 ? (
                        favoriteRecipeState.savedRecipeData.map(
                            (recipe, index) => (
                                <FavoriteCardComponent
                                    url={'/recipe-view/' + recipe.slug}
                                    key={index}
                                    recipe={recipe.name || 'Recipe'}
                                    originflag={
                                        recipe.image_path || 'Origin Image'
                                    }
                                    originname={
                                        recipe.origin_name || 'Origin Name'
                                    }
                                    src={recipe.recipe_img} // Replace with dynamic image source if available
                                    alt={`${recipe.name || 'Recipe'} image`}
                                />
                            )
                        )
                    ) : (
                        <p>No favorite recipes found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default FavoriteRecipe;

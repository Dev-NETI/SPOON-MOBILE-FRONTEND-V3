'use client';
import React, { useEffect, useState } from 'react';
import FavoriteCardComponent from '@/components/app/favorite/FavoriteCardComponent';
import { useSavedRecipe } from '@/hooks/api/saved-recipe';
import { useAuth } from '@/hooks/auth';

const FavoriteRecipe = () => {
    const { user } = useAuth({ middleware: 'auth' });
    const { index: getAllSavedRecipe, show: showSavedRecipe } =
        useSavedRecipe();
    const [favoriteRecipeState, setFavoriteRecipeState] = useState({
        savedRecipeData: [],
    });

    useEffect(() => {
        const fetchSavedRecipe = async () => {
            try {
                const { data } = await showSavedRecipe(user.id);
                setFavoriteRecipeState(prevState => ({
                    ...prevState,
                    savedRecipeData: data,
                }));
            } catch (error) {
                console.error('Failed to fetch saved recipes:', error);
            }
        };
        fetchSavedRecipe();
    }, [favoriteRecipeState.savedRecipeData]);

    return (
        <div className='gap-4 animate-fade-up animate-once animate-duration-1000'>
            <div className='flex justify-center mt-4 shadow-sm h-10'>
                <p className='font-bold text-stone-800 text-xl'>Favorites</p>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 px-5 mt-3'>
                {favoriteRecipeState.savedRecipeData.length > 0 ? (
                    favoriteRecipeState.savedRecipeData.map((recipe, index) => (
                        <FavoriteCardComponent
                            key={index}
                            recipe={recipe.name || 'Recipe'}
                            originflag={recipe.image_path || 'Origin Image'}
                            originname={recipe.origin_name || 'Origin Name'}
                            src={recipe.recipe_img} // Replace with dynamic image source if available
                            alt={`${recipe.name || 'Recipe'} image`}
                        />
                    ))
                ) : (
                    <p>No favorite recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteRecipe;

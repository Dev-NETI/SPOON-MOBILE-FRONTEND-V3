import React from 'react';
import FavoriteCardComponent from '@/components/app/favorite/FavoriteCardComponent';
import img from '/public/assets/app/recipes/WINGKO.JPG';

function FavoriteRecipe() {
    return (
        <div className='gap-4 animate-fade-up animate-once animate-duration-1000'>
            <div className='flex justify-center mt-4 shadow-sm h-10 '>
                <p className='font-bold text-stone-800 text-xl'>Favorites</p>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 px-5 mt-3'>
                <FavoriteCardComponent
                    recipe='Adobo'
                    src={img}
                    alt='food image'
                />
                <FavoriteCardComponent
                    recipe='Spaghetti'
                    src={img}
                    alt='food image'
                />
                <FavoriteCardComponent
                    recipe='Tinola'
                    src={img}
                    alt='food image'
                />
                <FavoriteCardComponent
                    recipe='Ginisang Munggo'
                    src={img}
                    alt='food image'
                />

                <FavoriteCardComponent
                    recipe='Ginisang Munggo'
                    src={img}
                    alt='food image'
                />

                <FavoriteCardComponent
                    recipe='Ginisang Munggo'
                    src={img}
                    alt='food image'
                />

                <FavoriteCardComponent />
            </div>
        </div>
    );
}

export default FavoriteRecipe;

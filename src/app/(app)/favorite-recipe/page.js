import React from 'react'
import FavoriteCardComponent from '@/components/app/favorite/FavoriteCardComponent'

function FavoriteRecipe() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center">
                <p className="font-bold text-stone-800 text-xl">Favorite</p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4">
                <FavoriteCardComponent
                    recipe="Adobo"
                    src="/assets/app/recipe/adobo.jpg"
                    alt="food image"
                />
                <FavoriteCardComponent
                    recipe="Spaghetti"
                    src="/assets/app/recipe/spaghetti.jpg"
                    alt="food image"
                />
                <FavoriteCardComponent
                    recipe="Tinola"
                    src="/assets/app/recipe/tinola.jpg"
                    alt="food image"
                />
                <FavoriteCardComponent
                    recipe="Ginisang Munggo"
                    src="/assets/app/recipe/munggo.jpg"
                    alt="food image"
                />
            </div>
        </div>
    )
}

export default FavoriteRecipe

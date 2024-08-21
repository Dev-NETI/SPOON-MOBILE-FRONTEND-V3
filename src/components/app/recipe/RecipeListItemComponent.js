import React from 'react';
import RecipeCardComponent from './RecipeCardComponent';
function RecipeListComponent({ data }) {
    return (
        <RecipeCardComponent
            imagePath={data.image_path}
            label={data.name}
            href={`/recipe-view/${data.slug}`}
        />
    );
}

export default RecipeListComponent;

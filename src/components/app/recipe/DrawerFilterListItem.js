import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { RecipeContext } from '@/stores/RecipeContext';
import { useContext } from 'react';

function DrawerFilterListItem({ data, identifier }) {
    const [isSelected, setIsSelected] = useState(false);
    const { recipeState, setRecipeState } = useContext(RecipeContext);
    let chipStyle = isSelected ? '' : 'outlined';
    return (
        <Chip
            key={data.id}
            label={data.name}
            color='primary'
            variant={chipStyle}
            onClick={() => {
                setIsSelected(true);
                setRecipeState(prevState => ({
                    ...prevState,
                    [identifier]: [...prevState[identifier], data.id],
                }));
            }}
        />
    );
}

export default DrawerFilterListItem;

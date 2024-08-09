import {
    Chip,
    Grid,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { green } from '@mui/material/colors';
import React from 'react';

function IngridientsTab({ Item }) {
    function generateIngredients() {
        return Item.ingredients.map((instruction, index) => (
            <ListItem key={index}>
                <ListItemIcon>
                    <CheckRoundedIcon sx={{ color: green[500] }} />
                </ListItemIcon>
                <ListItemText
                    primary={instruction}
                    sx={{ textAlign: 'justify' }}
                />
            </ListItem>
        ));
    }
    return <>{generateIngredients()}</>;
}

export default IngridientsTab;

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
        return Item?.ingredient.map(data => (
            <ListItem key={data.id}>
                <ListItemIcon>
                    <CheckRoundedIcon sx={{ color: green[500] }} />
                </ListItemIcon>
                <div className='flex flex-col gap-1'>
                    <ListItemText
                        primary={data.name}
                        sx={{ textAlign: 'justify' }}
                    />
                    <p className='text-xs italic text-gray-600'>
                        {data.instruction}
                    </p>
                </div>
            </ListItem>
        ));
    }
    return <>{generateIngredients()}</>;
}

export default IngridientsTab;

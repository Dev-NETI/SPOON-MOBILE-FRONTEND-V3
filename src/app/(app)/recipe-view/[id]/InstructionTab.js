import React from 'react';
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

function InstructionTab({ Item }) {
    function generateInstructions() {
        return Item.instructions.map((instruction, index) => (
            <ListItem key={index}>
                <ListItemText
                    primary={`${index + 1}. ${instruction}`}
                    sx={{ textAlign: 'justify' }}
                />
            </ListItem>
        ));
    }
    return <>{generateInstructions()}</>;
}

export default InstructionTab;

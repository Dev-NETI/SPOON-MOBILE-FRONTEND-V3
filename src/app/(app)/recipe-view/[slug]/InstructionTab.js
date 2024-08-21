import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

function InstructionTab({ Item }) {
    function generateInstructions() {
        return Item?.procedure.map(data => (
            <ListItem key={data.id}>
                <ListItemText
                    primary={`${data.number}. ${data.description}`}
                    sx={{ textAlign: 'justify' }}
                />
            </ListItem>
        ));
    }
    return <>{generateInstructions()}</>;
}

export default InstructionTab;

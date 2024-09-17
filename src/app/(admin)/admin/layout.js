import { Box } from '@mui/material';
import React from 'react';
import TopNavigation from './TopNavigation';

function layout({ children }) {
    return (
        <>
            <TopNavigation />
            <Box>{children}</Box>
        </>
    );
}

export default layout;

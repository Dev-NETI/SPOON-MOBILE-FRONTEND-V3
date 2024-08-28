import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TopNavigation from './TopNavigation';

function layout({ children }) {
    return (
        <>
            <TopNavigation />
            <Container maxWidth='lg'>{children}</Container>
        </>
    );
}

export default layout;

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TopNavigation from './TopNavigation';
import OceanAnimation from '@/components/admin/OceanAnimation';

function layout({ children }) {
    return (
        <>
            <TopNavigation />
            <Container maxWidth='lg'>{children}</Container>
            <OceanAnimation />
        </>
    );
}

export default layout;

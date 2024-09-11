import { Box, Container } from '@mui/material';
import React from 'react';
import TopNavigation from './TopNavigation';
import OceanAnimation from '@/components/admin/OceanAnimation';

function layout({ children }) {
    return (
        <>
            <TopNavigation />
            <Box>{children}</Box>
        </>
    );
}

export default layout;

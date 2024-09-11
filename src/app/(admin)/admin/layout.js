'use client';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
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

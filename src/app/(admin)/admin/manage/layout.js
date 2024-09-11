'use client';
import { Box, Container, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

function layout({ children }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box
                sx={{
                    width: '100%', // Makes the container fluid
                    bgcolor: '#e0e0e0', // Adds background color to the Box
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='auto'
                    aria-label='scrollable auto tabs example'
                    sx={{
                        '& .MuiTab-root': {
                            fontSize: '0.7rem',
                            color: 'text.primary', // Default text color for tabs
                        },
                        '& .Mui-selected': {
                            color: 'primary.main', // Color for the selected tab
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'primary.main', // Color for the indicator
                        },
                    }}
                >
                    <Tab label='Recipe' />
                    <Tab label='Category' />
                    <Tab label='Rank' />
                </Tabs>
            </Box>

            <Container maxWidth={false} sx={{ mb: 4 }}>
                {children}
            </Container>
        </>
    );
}

export default layout;

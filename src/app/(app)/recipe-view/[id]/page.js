'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import food1 from '../../../../../public/assets/app/recipes/01 BANH MI.jpg';
import { Card, CardContent } from '@/components/ui/card';
import icon1 from '../../../../../public/images/cooking.png';
import icon2 from '../../../../../public/images/spoon.png';
import icon3 from '../../../../../public/images/group.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { green } from '@mui/material/colors';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const howToCookCurry = {
    title: 'How to cook curry',
    ingredients: [
        '2 onions',
        '3 cloves of garlic',
        '2 tbsp curry paste',
        '400ml coconut milk',
        '500g chicken',
        '200ml water',
    ],
    instructions: [
        'Slice the onions and garlic and sauté them in a pan with a little oil until they are soft.',
        'Add the curry paste and cook for a few minutes until fragrant.',
        'Add the coconut milk and bring to the boil.',
        'Add the chicken and cook until it is cooked through.',
        'Add the water and bring to the boil again.',
        'Reduce the heat and let it simmer for about 30 minutes or until the curry is nice and thick.',
    ],
};

function generateIngredients() {
    return howToCookCurry.ingredients.map((instruction, index) => (
        <ListItem key={index}>
            <ListItemIcon>
                <CheckRoundedIcon sx={{ color: green[500] }} />
            </ListItemIcon>
            <ListItemText primary={instruction} sx={{ textAlign: 'justify' }} />
        </ListItem>
    ));
}

function generateInstructions() {
    return howToCookCurry.instructions.map((instruction, index) => (
        <ListItem key={index}>
            <ListItemText
                primary={`${index + 1}. ${instruction}`}
                sx={{ textAlign: 'justify' }}
            />
        </ListItem>
    ));
}

function page() {
    const [value, setValue] = React.useState(2);
    const [tab, setTab] = React.useState(0);
    const handleChange = (event, newTab) => {
        setTab(newTab);
    };

    return (
        <div className='flex flex-col p-2 sm:p-3 md:p-8'>
            <div className='grid'>
                <h1 className='text-3xl font-semibold text-gray-900 text-left'>
                    Chicken Curry with Onion Garlic
                </h1>
                <div className='flex items-center space-x-2'>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='font-light mb-1'>{value}/5(163)</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Image
                        src={food1}
                        alt='Chicken Curry'
                        height={400}
                        className='rounded-md hover:brightness-75 w-full shadow-md'
                    />

                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-1 gap-2'>
                        {[
                            { label: 'Category', value: 'Main Course' },
                            { label: 'Best Served', value: 'Lunch' },
                            { label: 'No. of Servings', value: '2 pax' },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className='hover:shadow-lg transition-shadow duration-300 shadow-md'
                            >
                                <CardContent className='p-4'>
                                    <div className='flex justify-center mt-4'>
                                        <Image
                                            src={
                                                index === 0
                                                    ? icon1
                                                    : index === 1
                                                      ? icon2
                                                      : index === 3
                                                        ? icon2
                                                        : icon3
                                            }
                                            alt='Icon'
                                            height={50}
                                            className='rounded-md contrast-50 filter grayscale-0'
                                        />
                                    </div>
                                    <p className='text-center font-bold text-sm mt-2 text-blue-800'>
                                        {item.label}
                                    </p>
                                    <p className='text-center text-sm text-gray-600 mt-1'>
                                        {item.value}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <h1 className='text-3xl font-semibold text-gray-600 text-left'>
                        Best served
                    </h1>
                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 mt-1'>
                        {[
                            { label: 'Pork' },
                            { label: 'Heavy Labor' },
                            { label: 'Hot Weather' },
                        ].map((item, index) => (
                            <Chip label={item.label} />
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-2 mt-1'>
                    <Box sx={{ width: '100%' }}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                pt: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Tabs
                                value={tab}
                                onChange={handleChange}
                                variant='scrollable'
                                scrollButtons
                                allowScrollButtonsMobile
                                centered
                                aria-label='scrollable force tabs example'
                            >
                                <Tab label='Ingredients' {...a11yProps(0)} />
                                <Tab label='Instructions' {...a11yProps(1)} />
                                <Tab label='Nutrition' {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={tab} index={0}>
                            <Grid container>
                                <Grid item xs={12} md={12}>
                                    <List>{generateIngredients()}</List>
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={tab} index={1}>
                            <Grid item xs={12} md={12}>
                                <List>{generateInstructions()}</List>
                            </Grid>
                        </CustomTabPanel>
                        <CustomTabPanel value={tab} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default page;

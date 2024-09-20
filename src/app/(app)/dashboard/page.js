'use client';
import React from 'react';
// import PopularDishComponent from '@/components/app/dashboard/PopularDishComponent';
import RecipeOriginCardComponent from '@/components/app/dashboard/RecipeOriginCardComponent';
import BmiHealthMetricsComponent from '@/components/app/dashboard/BmiHealthMetricsComponent';

const Dashboard = () => {
    return (
        <>
            <RecipeOriginCardComponent />
            {/* <PopularDishComponent /> */}
            <BmiHealthMetricsComponent />
        </>
    );
};

export default Dashboard;

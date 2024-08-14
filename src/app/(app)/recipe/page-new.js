'use client';
import React, { useEffect, useState } from 'react';
import InputWithIcon from '@/components/InputWithIcon';
import Drawer from '@mui/material/Drawer';
import DrawerFilterList from '@/components/app/recipe/DrawerFilterList';
import TuneIcon from '@mui/icons-material/Tune';
import { useRecipeOrigin } from '@/hooks/api/recipe-origin';

function page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { index: getAllOrigin } = useRecipeOrigin();
    const [recipeDataState, setRecipeDataState] = useState({
        originData: [],
    });

    useEffect(() => {
        const fetchOrigin = async () => {
            const { data } = await getAllOrigin();
            setRecipeDataState(prevState => ({
                ...prevState,
                originData: data,
            }));
        };

        fetchOrigin();
    }, []);

    // recipeDataState.originData && console.log(recipeDataState.originData);

    return (
        <>
            <div>
                <InputWithIcon
                    icon='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    label={'Search'}
                />
            </div>
            <div>
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className='py-2 px-5 bg-gray-300 rounded-md'
                >
                    <TuneIcon color='disabled' />
                </button>
                <Drawer
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    <div className='flex flex-col px-8 p-4'>
                        <DrawerFilterList
                            label='Origin'
                            data={recipeDataState.originData}
                        />
                        {/* <DrawerFilterList label='Best Served' />
                        <DrawerFilterList label='Category' />
                        <DrawerFilterList label='Weather' />
                        <DrawerFilterList label='Food Group' /> */}
                    </div>
                </Drawer>
            </div>
        </>
    );
}

export default page;

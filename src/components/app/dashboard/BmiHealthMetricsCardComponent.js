import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDashboard } from '@/hooks/api/dashboard';
import { Skeleton } from '@mui/material';

export default function BmiHealthMetricsCardComponent({
    title,
    subheader = '',
    bmiCategory = 1,
}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { show: getBmiData } = useDashboard('bmi-data');
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getBmiData(bmiCategory);

            setData(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            {loading ? (
                <div className='flex flex-col gap-4 p-6'>
                    <Skeleton animation='wave' variant='rounded' height={70} />
                    <Skeleton animation='wave' variant='rounded' height={70} />
                    <Skeleton animation='wave' variant='rounded' height={70} />
                    <Skeleton animation='wave' variant='rounded' height={70} />
                    <Skeleton animation='wave' variant='rounded' height={70} />
                </div>
            ) : (
                <>
                    <CardHeader title={title} subheader={subheader} />
                    <CardContent>
                        {currentItems.length > 0 ? (
                            <>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    {currentItems.map(item => (
                                        <ListItem key={item.id}>
                                            <ListItemText
                                                primary={`${item.user?.firstname} ${item.user?.lastname}`}
                                                secondary={`BMI: ${item.bmi}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Stack spacing={2} sx={{ marginTop: 2 }}>
                                    <Pagination
                                        count={totalPages}
                                        page={currentPage}
                                        onChange={handleChange}
                                        color='primary'
                                    />
                                </Stack>
                            </>
                        ) : (
                            <div className='flex justify-center items-center'>
                                <p className='text-red-700 italic'>
                                    No data yet.
                                </p>
                            </div>
                        )}
                    </CardContent>
                </>
            )}
        </Card>
    );
}

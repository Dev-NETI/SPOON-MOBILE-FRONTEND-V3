import CheckFieldComponent from '@/components/form/MUI/CheckFieldComponent';
import SelectFieldComponent from '@/components/form/MUI/SelectFieldComponent';
import TextFieldComponent from '@/components/form/MUI/TextFieldComponent';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Grid,
    Button,
    Fab,
    Typography,
    Divider,
    Paper,
    Box,
    Card,
    CardContent,
    IconButton,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';
import { RecipeContext } from '@/stores/RecipeContext';
import axios from '@/lib/axios'; // Make sure this import is at the top of your file

function RecipeFormComponent({ mode = 1, DataState, handleClose }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const { storeRecipe, setRecipeListState } = useContext(RecipeContext);

    const handleFileChange = async event => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    useEffect(() => {
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);

            return () => {
                URL.revokeObjectURL(url);
            };
        } else {
            setPreviewUrl('');
        }
    }, [selectedFile]);

    const uploadImage = async file => {
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await axios.post('/api/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data && response.data.path) {
                return response.data.path;
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast({
                title: 'Image upload failed',
                description: error.message,
                variant: 'destructive',
            });
            return null;
        }
    };

    const onSubmit = async data => {
        try {
            let imagePath = '';
            if (selectedFile) {
                imagePath = await uploadImage(selectedFile);
                if (!imagePath) {
                    return; // Stop submission if image upload failed
                }
            }

            const recipeData = {
                ...data,
                image_path: imagePath,
            };

            const response = await storeRecipe(recipeData);

            if (response.status === 200) {
                setRecipeListState(prevState => ({
                    ...prevState,
                    responseStore: true,
                }));
                toast({
                    title: 'Recipe submitted successfully!',
                    variant: 'success',
                });
                handleClose();
            }
        } catch (error) {
            console.error('Error submitting recipe:', error);
            toast({
                title: 'Failed to submit recipe',
                description: error.message,
                variant: 'destructive',
            });
        }
    };

    const formSchema = z.object({
        recipe_name: z.string().min(2, {
            message: 'Recipe name must be at least 2 characters.',
        }),
        meal_type_id: z.number().min(1, { message: 'Meal type is required' }),
        number_of_serving: z
            .number()
            .min(1, { message: 'Number of serving is required' }),
        recipe_origin_id: z
            .number()
            .min(1, { message: 'Recipe Origin is required' }),
        breakfast: z.number(),
        lunch: z.number(),
        snack: z.number(),
        dinner: z.number(),
        ingredients: z.array(
            z.object({
                name: z.string().nonempty(),
                instruction: z.string().nonempty(),
                unit_id: z.number().min(1, { message: 'Unit is required' }),
                quantity: z
                    .number()
                    .min(1, { message: 'Quantity is required' }),
                calories: z.number(),
                carbohydrate: z.number(),
                protein: z.number(),
                fat: z.number(),
                sodium: z.number(),
                fiber: z.number(),
            })
        ),
        instructions: z.array(
            z.object({
                number: z.number(),
                description: z.string().nonempty(),
            })
        ),
        image_path: z.string().optional(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            recipe_name: '',
            meal_type_id: 0,
            recipe_origin_id: 0,
            number_of_serving: 0,
            breakfast: 0,
            lunch: 0,
            snack: 0,
            dinner: 0,
            ingredients: [
                {
                    name: '',
                    instruction: '',
                    quantity: 0,
                    unit_id: 0,
                    calories: 0,
                    carbohydrate: 0,
                    protein: 0,
                    fat: 0,
                    sodium: 0,
                    fiber: 0,
                },
            ],
            instructions: [
                {
                    number: 1,
                    description: '',
                },
            ],
            image_path: '',
        },
    });

    const {
        fields: ingredientFields,
        append: appendIngredient,
        remove: removeIngredient,
    } = useFieldArray({
        control: form.control,
        name: 'ingredients',
    });

    const {
        fields: instructionFields,
        append: appendInstruction,
        remove: removeInstruction,
    } = useFieldArray({
        control: form.control,
        name: 'instructions',
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(mode === 1 ? onSubmit : null)}
                className='space-y-8'
            >
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant='h4' gutterBottom color='primary'>
                        Recipe Information
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        paragraph
                    >
                        Fill in the basic details of your recipe.
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <TextFieldComponent
                                form={form}
                                name='recipe_name'
                                label='Recipe Name'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                component='label'
                                variant='outlined'
                                startIcon={<CloudUploadIcon />}
                                fullWidth
                                sx={{ height: '56px' }}
                            >
                                Upload Picture
                                <input
                                    type='file'
                                    hidden
                                    onChange={handleFileChange}
                                    accept='image/jpeg, image/png'
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectFieldComponent
                                form={form}
                                name='meal_type_id'
                                DataState={DataState.meal_type_data}
                                label='Meal Type'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectFieldComponent
                                form={form}
                                name='recipe_origin_id'
                                DataState={DataState.recipe_origin_data}
                                label='Recipe Origin'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextFieldComponent
                                form={form}
                                name='number_of_serving'
                                label='Number of Servings'
                                variant='outlined'
                                type='number'
                            />
                        </Grid>
                        {previewUrl && (
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        mt: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        src={previewUrl}
                                        alt='Preview'
                                        width={100}
                                        height={100}
                                        style={{
                                            borderRadius: '8px',
                                            objectFit: 'cover',
                                            marginRight: '16px',
                                        }}
                                    />
                                    <Box>
                                        <Typography variant='body1'>
                                            {selectedFile.name}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            {`${(selectedFile.size / 1024).toFixed(2)} KB`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Paper>

                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant='h4' gutterBottom color='primary'>
                        Meal Details
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        paragraph
                    >
                        Select which meals this recipe is suitable for.
                    </Typography>
                    <Grid container spacing={2}>
                        {['breakfast', 'lunch', 'snack', 'dinner'].map(meal => (
                            <Grid item xs={6} sm={3} key={meal}>
                                <CheckFieldComponent
                                    label={
                                        meal.charAt(0).toUpperCase() +
                                        meal.slice(1)
                                    }
                                    name={meal}
                                    form={form}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>

                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant='h4' gutterBottom color='primary'>
                        Ingredients and Nutrients
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        paragraph
                    >
                        Add ingredients and their nutritional information.
                    </Typography>
                    {ingredientFields.map((item, index) => (
                        <Card
                            key={item.id}
                            sx={{ mb: 3, position: 'relative' }}
                        >
                            <CardContent>
                                <IconButton
                                    aria-label='delete'
                                    onClick={() => removeIngredient(index)}
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <Typography variant='h6' gutterBottom>
                                    Ingredient {index + 1}
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldComponent
                                            form={form}
                                            name={`ingredients[${index}].name`}
                                            label='Ingredient Name'
                                            variant='outlined'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextFieldComponent
                                            form={form}
                                            name={`ingredients[${index}].instruction`}
                                            label='Preparation Instructions'
                                            variant='outlined'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextFieldComponent
                                            form={form}
                                            name={`ingredients[${index}].quantity`}
                                            label='Quantity'
                                            variant='outlined'
                                            type='number'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <SelectFieldComponent
                                            form={form}
                                            name={`ingredients[${index}].unit_id`}
                                            DataState={DataState.unit_data}
                                            label='Unit'
                                            fullWidth
                                        />
                                    </Grid>
                                    {[
                                        'calories',
                                        'carbohydrate',
                                        'protein',
                                        'fat',
                                        'sodium',
                                        'fiber',
                                    ].map(nutrient => (
                                        <Grid item xs={6} sm={2} key={nutrient}>
                                            <TextFieldComponent
                                                form={form}
                                                name={`ingredients[${index}].${nutrient}`}
                                                label={
                                                    nutrient
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                    nutrient.slice(1)
                                                }
                                                variant='outlined'
                                                type='number'
                                                fullWidth
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2,
                        }}
                    >
                        <Fab
                            color='primary'
                            aria-label='add ingredient'
                            onClick={() =>
                                appendIngredient({
                                    name: '',
                                    instruction: '',
                                    quantity: 0,
                                    unit_id: 0,
                                    calories: 0,
                                    carbohydrate: 0,
                                    protein: 0,
                                    fat: 0,
                                    sodium: 0,
                                    fiber: 0,
                                })
                            }
                        >
                            <AddIcon />
                        </Fab>
                    </Box>
                </Paper>

                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant='h4' gutterBottom color='primary'>
                        Cooking Instructions
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        paragraph
                    >
                        Add step-by-step instructions for preparing the recipe.
                    </Typography>
                    {instructionFields.map((item, index) => (
                        <Card
                            key={item.id}
                            sx={{ mb: 3, position: 'relative' }}
                        >
                            <CardContent>
                                <IconButton
                                    aria-label='delete'
                                    onClick={() => removeInstruction(index)}
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <Typography variant='h6' gutterBottom>
                                    Step {index + 1}
                                </Typography>
                                <TextFieldComponent
                                    form={form}
                                    name={`instructions[${index}].description`}
                                    label={`Instruction ${index + 1}`}
                                    variant='outlined'
                                    multiline
                                    rows={3}
                                    fullWidth
                                />
                            </CardContent>
                        </Card>
                    ))}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2,
                        }}
                    >
                        <Fab
                            color='primary'
                            aria-label='add instruction'
                            onClick={() =>
                                appendInstruction({
                                    number: instructionFields.length + 1,
                                    description: '',
                                })
                            }
                        >
                            <AddIcon />
                        </Fab>
                    </Box>
                </Paper>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        size='large'
                        sx={{
                            padding: '12px 24px',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        Submit Recipe
                    </Button>
                </Box>
            </form>
        </Form>
    );
}

export default RecipeFormComponent;

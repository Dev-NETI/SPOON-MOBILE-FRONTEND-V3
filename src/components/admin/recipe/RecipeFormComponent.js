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
    Snackbar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';

function RecipeFormComponent({ mode = 1, DataState, handleClose }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleFileChange = event => {
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

    const onSubmit = async data => {
        try {
            console.log(data);
            toast({
                title: 'Recipe submitted successfully!',
                variant: 'success',
            });
            handleClose();
        } catch (error) {
            console.error(error);
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
                    ingredient: '',
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
                className='space-y-6'
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant='h4' gutterBottom>
                            Recipe Information
                        </Typography>
                        <Typography variant='subtitle2' color='text.secondary'>
                            Here you can add a new recipe.
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <TextFieldComponent
                            form={form}
                            name='recipe_name'
                            label='Recipe Name'
                            variant='outlined'
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Button
                            component='label'
                            variant='contained'
                            startIcon={<CloudUploadIcon />}
                            fullWidth
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

                    <Grid item xs={12} md={3}>
                        <SelectFieldComponent
                            form={form}
                            name='meal_type_id'
                            DataState={DataState.meal_type_data}
                            label='Meal Type'
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <SelectFieldComponent
                            form={form}
                            name='recipe_origin_id'
                            DataState={DataState.recipe_origin_data}
                            label='Recipe Origin'
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <TextFieldComponent
                            form={form}
                            name='number_of_serving'
                            label='Number of Serving'
                            variant='outlined'
                            type='number'
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        {previewUrl && (
                            <Grid container spacing={2} alignItems='center'>
                                <Grid item xs={12} md={3}>
                                    <Image
                                        src={previewUrl}
                                        alt='Preview'
                                        width={100}
                                        height={100}
                                        style={{
                                            borderRadius: '8px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography variant='body1'>
                                        {selectedFile.name}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        {`${(selectedFile.size / 1024).toFixed(2)} KB`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='h4' gutterBottom>
                            Meal Details
                        </Typography>
                        <Typography variant='subtitle2' color='text.secondary'>
                            Suitable for different meals.
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <CheckFieldComponent
                                    label='Breakfast'
                                    name='breakfast'
                                    form={form}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <CheckFieldComponent
                                    label='Lunch'
                                    name='lunch'
                                    form={form}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <CheckFieldComponent
                                    label='Snack'
                                    name='snack'
                                    form={form}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <CheckFieldComponent
                                    label='Dinner'
                                    name='dinner'
                                    form={form}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h4' gutterBottom>
                        Recipe Nutrients
                    </Typography>
                    <Typography variant='subtitle2' color='text.secondary'>
                        Here you can add nutrients and ingredients.
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                </Grid>

                {ingredientFields.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Grid
                            container
                            spacing={2}
                            className='animate-fade-up animate-once animate-duration-1000'
                        >
                            <Grid item xs={6}>
                                <TextFieldComponent
                                    form={form}
                                    name={`ingredients[${index}].name`}
                                    label={`Ingredient ${index + 1}`}
                                    variant='outlined'
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextFieldComponent
                                    form={form}
                                    name={`ingredients[${index}].instruction`}
                                    label={`Instruction ${index + 1}`}
                                    variant='outlined'
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextFieldComponent
                                    form={form}
                                    name={`ingredients[${index}].quantity`}
                                    label={`Quantity`}
                                    variant='outlined'
                                    type='number'
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <SelectFieldComponent
                                    form={form}
                                    name={`ingredients[${index}].unit_id`}
                                    DataState={DataState.unit_data}
                                    label='Unit'
                                />
                            </Grid>

                            {[
                                'calories',
                                'carbohydrate',
                                'protein',
                                'fat',
                                'sodium',
                                'fiber',
                            ].map((nutrient, i) => (
                                <Grid item xs={6} md={2} key={i}>
                                    <TextFieldComponent
                                        form={form}
                                        name={`ingredients[${index}].${nutrient}`}
                                        label={
                                            nutrient.charAt(0).toUpperCase() +
                                            nutrient.slice(1)
                                        }
                                        variant='outlined'
                                        type='number'
                                    />
                                </Grid>
                            ))}

                            <Grid item xs={12}>
                                <Button
                                    variant='outlined'
                                    color='error'
                                    onClick={() => removeIngredient(index)}
                                >
                                    Remove Ingredient
                                </Button>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                ))}

                <Grid item xs={12} container justifyContent='flex-end'>
                    <Fab
                        color='primary'
                        aria-label='add'
                        onClick={() =>
                            appendIngredient({
                                ingredient: '',
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
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h4' gutterBottom>
                        Recipe Instructions
                    </Typography>
                    <Typography variant='subtitle2' color='text.secondary'>
                        Here you can add instructions.
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                </Grid>

                {instructionFields.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Grid
                            container
                            spacing={2}
                            className='animate-fade-up animate-once animate-duration-1000'
                        >
                            <Grid item xs={12}>
                                <TextFieldComponent
                                    form={form}
                                    name={`instructions[${index}].description`}
                                    label={`Instruction ${index + 1}`}
                                    variant='outlined'
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant='outlined'
                                    color='error'
                                    onClick={() => removeInstruction(index)}
                                >
                                    Remove Instruction
                                </Button>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                ))}

                <Grid item xs={12} container justifyContent='flex-end'>
                    <Fab
                        color='primary'
                        aria-label='add'
                        onClick={() =>
                            appendInstruction({
                                number: instructionFields.length + 1,
                                description: '',
                            })
                        }
                    >
                        <AddIcon />
                    </Fab>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        fullWidth
                        sx={{
                            padding: '12px',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </form>
        </Form>
    );
}

export default RecipeFormComponent;

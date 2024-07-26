import React, { useState } from 'react';
import InputGroupV2 from '@/components/InputGroupV2';
import Button from '@/components/Button';
import { useContext } from 'react';
import { RegisterContext } from '@/stores/RegisterContext';

function EmploymentDetailForm() {
    const { nextForm, Yup, setUserData } = useContext(RegisterContext);
    const [error, setError] = useState({});

    const rules = Yup.object().shape({
        company: Yup.string().required('Company is required!'),
        category: Yup.string().required('Category is required!'),
        rank: Yup.string().required('Rank is required!'),
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const object = Object.fromEntries(formData.entries());

        try {
            await rules.validate(object, { abortEarly: false });

            setUserData(prevState => ({ ...prevState, ...object }));
            nextForm();
        } catch (error) {
            const errors = error.inner.reduce((acc, curr) => {
                acc[curr.path] = curr.message;
                return acc;
            }, {});
            setError(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <InputGroupV2
                    label='Company'
                    id='company'
                    name='company'
                    type='text'
                    errorMessage={error.company}
                />
            </div>
            <div>
                <InputGroupV2
                    label='Category'
                    id='category'
                    name='category'
                    type='text'
                    errorMessage={error.category}
                />
            </div>
            <div>
                <InputGroupV2
                    label='Rank'
                    id='rank'
                    name='rank'
                    type='text'
                    errorMessage={error.rank}
                />
            </div>
            <div className='flex justify-end py-4'>
                <Button type='submit'>Next</Button>
            </div>
        </form>
    );
}

export default EmploymentDetailForm;

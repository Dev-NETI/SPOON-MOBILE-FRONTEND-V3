'use client';

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { RegisterContext } from '@/stores/RegisterContext';
import PersonalInfoForm from '@/components/auth/register/PersonalInfoForm';
import RegisterLink from '@/components/auth/RegisterLink';
import BodyMetricsForm from '@/components/auth/register/BodyMetricsForm';
import EmploymentDetailForm from '@/components/auth/register/EmploymentDetailForm';
import CredentialForm from '@/components/auth/register/CredentialForm';
import ResponseView from '@/components/form/ResponseView';
import AgreeForm from '@/components/auth/register/AgreeForm';
import * as Yup from 'yup';

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [registrationState, setRegistrationState] = useState({
        activeForm: 1,
        progressBarValue: 16.666,
        formIndicator: 1,
        storeResponse: null,
    });

    const [userData, setUserData] = useState(null);

    // userData && console.log(userData);

    useEffect(() => {
        axios.get('/api/check-status-email').then(response => {
            if (response.data.isEmailValid) {
                setEmail(response.data.authEmail);
            } else {
                router.push('/login');
            }
        });
    }, []);

    const nextForm = () => {
        setRegistrationState(prevState => ({
            ...prevState,
            activeForm: registrationState.activeForm + 1,
            progressBarValue: registrationState.progressBarValue + 16.666,
            formIndicator: registrationState.formIndicator + 1,
        }));
    };

    let activeUi;
    switch (registrationState.activeForm) {
        case 1:
            activeUi = <PersonalInfoForm />;
            // activeUi = <AgreeForm />;
            break;
        case 2:
            activeUi = <BodyMetricsForm />;
            break;
        case 3:
            activeUi = <EmploymentDetailForm />;
            break;
        case 4:
            activeUi = <CredentialForm />;
            break;
        case 5:
            activeUi = <AgreeForm />;
            break;
        default:
            activeUi = (
                <ResponseView response={registrationState.storeResponse} />
            );
            break;
    }

    return (
        <RegisterContext.Provider
            value={{
                nextForm,
                Yup,
                userData,
                setUserData,
                email,
                setRegistrationState,
            }}
        >
            <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2'>
                <div
                    className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
                    style={{ width: `${registrationState.progressBarValue}%` }}
                >
                    {' '}
                    {registrationState.formIndicator}/6{' '}
                </div>
            </div>

            {activeUi}

            <div className='flex items-center justify-end mt-4'>
                <RegisterLink />
            </div>
        </RegisterContext.Provider>
    );
};

export default Page;

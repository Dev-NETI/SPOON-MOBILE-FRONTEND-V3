'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { RegisterContext } from '@/stores/RegisterContext'
import PersonalInfoForm from '@/components/auth/register/PersonalInfoForm'
import RegisterLink from '@/components/auth/RegisterLink'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [registrationState, setRegistrationState] = useState({
        activeForm: 1,
        progressBarValue: 33.333,
        formIndicator: 1,
    });

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    useEffect(() => {
        axios.get('/api/check-status-email').then(response => {
            if (response.data.isEmailValid) {
                setEmail(response.data.authEmail)
            } else {
                router.push('/login')
            }
        })
    }, [])

    const nextForm = () => {
        setRegistrationState(prevState => ({
            ...prevState, activeForm: registrationState.activeForm + 1,
            progressBarValue: registrationState.progressBarValue + 33.333, formIndicator: registrationState.formIndicator + 1
        }))
    }

    let activeUi;
    switch (registrationState.activeForm) {
        case 1:
            activeUi = <PersonalInfoForm />;
            break;

        default:
            activeUi = <PersonalInfoForm />;
            break;
    }

    return (
        <RegisterContext.Provider value={{ nextForm }} >

            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${registrationState.progressBarValue}%` }} > {registrationState.formIndicator}/3 </div>
            </div >

            {activeUi}

            <div className="flex items-center justify-end mt-4">
                <RegisterLink />
            </div>

        </RegisterContext.Provider >
    )
}

export default Page

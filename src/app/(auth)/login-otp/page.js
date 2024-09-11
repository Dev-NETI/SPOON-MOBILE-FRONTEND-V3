'use client';
import { React, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import Loading from '@/app/(app)/Loading';
import { useEmailHook } from '@/hooks/api/email-hook';
import VerificationCodeForm from '@/components/auth/register/VerificationCodeForm';

function LoginOtp() {
    const router = useRouter();
    const { user, logout } = useAuth({
        middleware: 'auth',
    });
    const { showWith2Parameter: sendVerificationCode } = useEmailHook(
        'send-verification-code'
    );
    const [tempt_otp, setTempt_otp] = useState();
    const [timerState, setTimerState] = useState(null);

    useEffect(() => {
        setTempt_otp(Math.floor(100000 + Math.random() * 900000));
    }, []);

    useEffect(() => {
        const sendEmail = async () => {
            if (user?.email && tempt_otp && timerState === null) {
                await handleSendVerificationCode();
            }
        };

        sendEmail();
    }, [user, tempt_otp, sendVerificationCode, timerState]);

    useEffect(() => {
        let timer;
        if (timerState > 0) {
            timer = setInterval(() => {
                setTimerState(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timerState]);

    const onSubmit = async data => {
        const match = parseInt(data.pin) === tempt_otp;

        if (match) {
            toast({
                title: 'Successfully Verified',
                description: 'You have successfully verified your account!',
            });
            document.cookie = `35de80170cda0d14e2cdd82e9e89d375 = 6f7d41b92d3e4519c9f12b765a83ab4f; path=/; max-age=600`;
            router.push('/dashboard');
        } else {
            toast({
                title: 'Authentication failed',
                variant: 'destructive',
                description: 'Invalid OTP. Please try again.!',
            });
        }
    };

    async function generateOtp() {
        await axios
            .post('/api/authenticating', { temp_otp: tempt_otp })
            .then(() => {
                // console.log(response.data.status);
            })
            .catch(() => {
                // console.error('Error authenticating:', error);
            });
    }

    useEffect(() => {
        axios.get('/api/checking-status-otp').then(response => {
            if (response.data.status === true) {
                router.push('/dashboard');
                // console.log('Verified');
            } else {
                generateOtp();
            }
        });
    }, []);

    const handleSendVerificationCode = async () => {
        const { data: responseData } = await sendVerificationCode(
            tempt_otp,
            user.email
        );
        return responseData;
    };

    const handleResendVerificationCode = async () => {
        const sendResponse = await handleSendVerificationCode();
        // console.log(sendResponse);
        if (sendResponse) {
            setTimerState(60);
            toast({
                title: 'Verification Code',
                description: 'Verification Code resent successfully!',
            });
        }
    };

    return (
        <>
            {!user ? (
                <div className='flex min-h-full flex-1 flex-col justify-center items-center lg:px-8'>
                    <Loading />
                </div>
            ) : (
                <div className='flex min-h-full flex-1 flex-col justify-center items-center lg:px-8'>
                    <VerificationCodeForm
                        handleSubmit={onSubmit}
                        timerState={timerState}
                        verificationCode={tempt_otp}
                        handleResendVerificationCode={
                            handleResendVerificationCode
                        }
                    />

                    <p className='mt-10 text-center text-sm text-gray-500'>
                        Logout an Account?{' '}
                        <button
                            onClick={logout}
                            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                        >
                            Click here
                        </button>
                    </p>
                </div>
            )}
        </>
    );
}

export default LoginOtp;

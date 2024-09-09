'use client';
import { React, useEffect, useState } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { useAuth } from '@/hooks/auth';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import Loading from '@/app/(app)/Loading';

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: 'Your one-time password must be 6 characters.',
    }),
});

function LoginOtp() {
    const router = useRouter();
    const { user, logout } = useAuth({
        middleware: 'auth',
    });

    const [tempt_otp, setTempt_otp] = useState();

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: '',
        },
    });

    useEffect(() => {
        setTempt_otp(Math.floor(100000 + Math.random() * 900000));
    }, []);

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

    return (
        <>
            {!user ? (
                <div className='flex min-h-full flex-1 flex-col justify-center items-center lg:px-8'>
                    <Loading />
                </div>
            ) : (
                <div className='flex min-h-full flex-1 flex-col justify-center items-center lg:px-8'>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-6'
                        >
                            <FormField
                                control={form.control}
                                name='pin'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>One-Time Password</FormLabel>
                                        <FormControl className='flex'>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup className='flex mx-auto'>
                                                    <InputOTPSlot
                                                        type='number'
                                                        index={0}
                                                    />
                                                    <InputOTPSlot
                                                        type='number'
                                                        index={1}
                                                    />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot
                                                        type='number'
                                                        index={2}
                                                    />
                                                    <InputOTPSlot
                                                        type='number'
                                                        index={3}
                                                    />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot
                                                        type='number'
                                                        index={4}
                                                    />
                                                    <InputOTPSlot
                                                        type='number'
                                                        index={5}
                                                    />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                            Please enter the one-time password
                                            sent to your phone. ({tempt_otp})
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className='w-full' type='submit'>
                                Submit
                            </Button>
                        </form>
                    </Form>

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

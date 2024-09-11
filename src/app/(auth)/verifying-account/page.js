'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { toast } from '@/components/ui/use-toast';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const submitForm = async event => {
        const isEmailValid = await verifyEmail(email);
        event.preventDefault();

        if (isEmailValid) {
            router.push('/register');
        } else {
            toast({
                title: 'Authentication failed',
                variant: 'destructive',
                description: 'Email already exists try to forget password.',
            });
        }
    };

    const verifyEmail = async email => {
        event.preventDefault();

        return axios
            .post('/api/check-register-email', { email })
            .then(response => response.data.isEmailValid);
    };

    return (
        <>
            <p className="text-sm text-slate-500 mb-3 ">
                Please enter your email address to verify your account.
            </p>
            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div className="base-full">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Button type="submit" className="w-full justify-center">
                        VERIFY
                    </Button>
                </div>
                <div className="flex items-center justify-center mt-4 underline">
                    <a
                        href="/login"
                        className=" text-blue-600 hover:text-blue-800 font-semibold text-sm">
                        Already have an account?
                    </a>
                </div>
            </form>
        </>
    );
};

export default Page;

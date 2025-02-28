'use client';

import { useAuth } from '@/hooks/auth';
import Navigation from '@/app/(app)/Navigation';
import Loading from '@/app/(app)/Loading';
import BottomNavigation from '@/components/app/BottomNavigation';

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' });

    if (!user) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            <main>{children}</main>
            
            <div className='flex'>
                <div className='mx-10'>
                <BottomNavigation />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;

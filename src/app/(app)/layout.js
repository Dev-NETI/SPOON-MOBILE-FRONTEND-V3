'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import BottomNavigation from '@/components/app/BottomNavigation'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className='flex flex-col'>
                <div className='basis-3/12'>
                    <p className='text-slate-900 font-semibold text-lg ml-4 py-4'>
                        John Doe
                    </p>
                </div>
                <div className='basis-full'>{children}</div>
                <div className='basis-full py-6'>
                    <BottomNavigation/>
                </div>
            </div>
        </div>
    )
}

export default AppLayout

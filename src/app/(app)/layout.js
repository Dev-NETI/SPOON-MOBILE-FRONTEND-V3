'use client'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import BottomNavigation from '@/components/app/BottomNavigation'
import logo from '../../../public/images/spoon_logo.png'
import Image from 'next/image'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col">
                <div className="basis-3/12 bg-blue-800 flex items-center justify-center px-2 py-2">
                    <Image
                        src={logo}
                        alt="Spoon Logo"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="basis-3/12">
                    <p className="text-slate-900 font-semibold text-lg ml-4 py-4">
                        John Doe
                    </p>
                </div>
                <div className="basis-full">{children}</div>
                <BottomNavigation />
            </div>
        </div>
    )
}

export default AppLayout

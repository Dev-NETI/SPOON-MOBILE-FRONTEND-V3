'use client'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import BottomNavigation from '@/components/app/BottomNavigation'
import logo from '../../../public/images/spoon_logo.png'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
                        className="mt-12"
                        src={logo}
                        alt="Spoon Logo"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="basis-3/12">
                    <div className="flex flex-row items-center justify-right px-4 py-4">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>
                                {user.f_name} {user.l_name}
                            </AvatarFallback>
                        </Avatar>
                        <p className="ml-2">
                            {user.f_name} {user.l_name}
                        </p>
                    </div>
                </div>
                <div className="basis-full mb-96">{children}</div>
                <BottomNavigation />
            </div>
        </div>
    )
}

export default AppLayout

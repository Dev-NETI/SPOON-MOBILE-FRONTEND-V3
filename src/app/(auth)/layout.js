import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

export const metadata = {
    title: 'SPOON.PH',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/login">
                            <ApplicationLogo className="w-20 h-20 fill-current text-blue-800" />
                        </Link>
                    }>
                    {children}
                </AuthCard>
                <footer className="fixed bottom-0 left-0 right-0 bg-blue-800 p-6 text-center text-white">
                    <p className="text-xs">&copy; 2024 Spoon.ph</p>
                    <p className="text-xs">All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default Layout

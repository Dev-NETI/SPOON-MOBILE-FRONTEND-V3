import Image from 'next/image'
import icon from '../../../public/images/star.png'
import AuthCardHeader from './AuthCardHeader'
const AuthCard = ({ logo, children, title }) => (
    <div className="min-h-screen flex flex-col md:flex-col items-center justify-center bg-blue-800 p-4 md:p-0 relative">
        <div className="absolute top-0 right-0 z-49">
            <Image src={icon} alt="bg_star" priority />
        </div>
        {logo}
        <div className="w-full max-w-md mt-8 bg-white rounded-lg shadow-md border overflow-hidden animate-fade-up animate-once animate-duration-1000">
            <AuthCardHeader title={title} />
            <div className="px-6 py-4">{children}</div>
        </div>
    </div>
)

export default AuthCard

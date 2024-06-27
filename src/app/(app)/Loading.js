import Image from 'next/image'
import logo from '../../../public/images/spoon_logo.png'
const Loading = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-blue-800 ">
            <Image
                src={logo}
                alt="Spoon Logo"
                width={200}
                height={200}
                className="animate-pulse animate-infinite"
            />
        </div>
    )
}

export default Loading

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Spoon PH',
};

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen bg-slate-200'>
            <div className='p-8 bg-blue-400'>
                <h1
                    className='text-5xl md:text-7xl lg:text-7xl 
                            text-stone-800 font-semibold font-mono'
                >
                    Spoon PH
                </h1>
            </div>

            <div
                className='flex-grow flex flex-col gap-8
            md:flex-row lg:flex-row md:gap-60 lg:gap-60
            bg-gradient-to-b from-blue-400 to-blue-700 
            py-4
            md:px-14 lg:px-14 
            md:py-20 lg:py-20'
            >
                <div className='flex justify-center items-center'>
                    <Image
                        src='/assets/app/icons/sppon.png'
                        alt='Picture of the author'
                        width={1200}
                        height={1200}
                    />
                </div>
                <div
                    className='
                    p-4
                    md:px-48 lg:px-48 
                    md:py-52 lg:py-52 '
                >
                    <div
                        className='flex flex-col justify-center  
                      bg-stone-800 rounded-2xl 
                        gap-4 p-8
                        md:gap-7 lg:gap-7
                        md:px-48 lg:px-48 
                        h-full 
                        shadow-xl shadow-stone-900'
                    >
                        <h1
                            className='text-3xl
                          md:text-7xl lg:text-7xl 
                        text-slate-200 font-semibold font-mono'
                        >
                            Welcome
                        </h1>
                        <button
                            type='button'
                            className='rounded-full border-2 border-slate-50 p-2
                            font-semibold font-mono text-slate-200 
                            text-sm
                            md:text-lg lg:text-lg 
                            hover:bg-blue-800 hover:shadow-lg hover:shadow-cyan-900'
                        >
                            <Link href='/login'>Login</Link>
                        </button>
                        <button
                            type='button'
                            className='rounded-full border-2 border-slate-50 p-2
                            font-semibold font-mono text-slate-200 
                            text-sm
                            md:text-lg lg:text-lg 
                            hover:bg-blue-800 hover:shadow-lg hover:shadow-cyan-900'
                        >
                            <Link href='/register'>Create Account</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

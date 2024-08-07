import Image from 'next/image';

const Loading = () => {
    return (
        <div className='flex min-h-screen w-full items-center justify-center bg-blue-800'>
            <Image
                src='/images/spoon_logo.png'
                alt='Spoon Logo'
                className='animate-pulse animate-infinite'
                priority
                width={200}
                height={200}
                style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '200px',
                    maxHeight: '200px',
                }}
            />
        </div>
    );
};

export default Loading;

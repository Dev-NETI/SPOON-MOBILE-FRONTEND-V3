import { Nunito } from 'next/font/google';
import '@/app/global.css';
import LoginComponent from '@/components/auth/LoginComponent';

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
});

const RootLayout = ({ children }) => {
    return (
        <html lang='en' className={nunitoFont.className}>
            <body className='antialiased'>
                <LoginComponent>{children}</LoginComponent>
            </body>
        </html>
    );
};

export const metadata = {
    title: 'SPOON.PH',
};

export default RootLayout;

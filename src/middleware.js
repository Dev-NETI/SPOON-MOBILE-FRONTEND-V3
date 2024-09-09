import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();
    const cookies = request.cookies;
    const protectedPaths = [
        '/dashboard',
        '/profile',
        '/account-setup',
        '/calculator',
        '/favorite-recipe',
        '/recipe',
        '/recipe-view',
        '/home',
        '/manage-recipe',
        '/user',
    ];

    if (protectedPaths.includes(url.pathname)) {
        if (
            cookies.get('35de80170cda0d14e2cdd82e9e89d375')?.value !==
            '6f7d41b92d3e4519c9f12b765a83ab4f'
        ) {
            url.pathname = '/login-otp';
            return NextResponse.redirect(url);
        } else {
            return NextResponse.next();
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/account-setup/:path*',
        '/calculator/:path*',
        '/favorite-recipe/:path*',
        '/recipe/:path*',
        '/recipe-view/:path*',
        '/home/:path*',
        '/manage-recipe/:path*',
        '/user/:path*',
    ],
};

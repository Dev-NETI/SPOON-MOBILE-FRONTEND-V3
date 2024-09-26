import { NextResponse } from 'next/server';

export default function UserTypeAuthorizationMiddleware(
    url,
    cookies,
    protectedUserTypeRoutes
) {
    if (protectedUserTypeRoutes.includes(url.pathname)) {
        if (
            cookies.get('P0iW8sQ7xT9vF5bN1mZ6dL3eR4cV2hX8jK3qW7nC9')?.value ===
            '1'
        ) {
            url.pathname = '/unauthorized';
            return NextResponse.redirect(url);
        } else {
            return NextResponse.next();
        }
    }

    return NextResponse.next();
}

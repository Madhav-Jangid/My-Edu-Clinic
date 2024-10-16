import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const role = request.cookies.get('role')?.value || '';
    const token = request.cookies.get('token')?.value || '';
    const url = request.nextUrl.clone();
    const path = url.pathname.toLowerCase();  // Ensure case-insensitive matching




    const publicPaths = [
        '/usertype',
        '/serviceprovider/login',
        '/serviceprovider/register',
        '/student/auth/register',
        '/student/auth/login',
    ];

    // Handle missing token/role: Redirect to '/' if trying to access restricted routes
    if (!token && !role && !publicPaths.includes(path)) {
        return NextResponse.rewrite(new URL('/', request.url));        
    }

    if (path === '/') {
        if (role === 'student') {
            url.pathname = '/student/home';
            return NextResponse.redirect(url);
        } else if (role === 'serviceprovider') {
            url.pathname = '/serviceprovider/dashboard';
            return NextResponse.redirect(url);
        }
    }

    // Redirect logged-in users away from public routes
    if (publicPaths.includes(path)) {
        if (role === 'student') {
            url.pathname = '/student/home';
            return NextResponse.redirect(url);
        } else if (role === 'serviceprovider') {
            url.pathname = '/serviceprovider/dashboard';
            return NextResponse.redirect(url);
        }
    }

    // Block students from accessing service provider routes
    if (role === 'student' && path.startsWith('/serviceprovider')) {
        url.pathname = '/student/home';
        return NextResponse.redirect(url);
    }

    // Block service providers from accessing student routes
    if (role === 'serviceprovider' && path.startsWith('/student')) {
        url.pathname = '/serviceprovider/dashboard';
        return NextResponse.redirect(url);
    }

    // Allow the request to proceed if all checks pass
    return NextResponse.next();

}

// Matcher to apply middleware to relevant routes
export const config = {
    matcher: ['/', '/usertype', '/serviceprovider/:path*', '/student/:path*'],
};

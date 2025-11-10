import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = [
  '/login',
  '/register',
  '/greet',
  '/reset-password',
  '/check-email',
  '/otp-verify',
  '/create-new-password',
  '/change-success'
];

export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Get the token — from cookies (or headers)
//   const accessToken = request.cookies.get('accessToken')?.value

//   // Check if the route is in the PUBLIC_PATHS list
//   const isPublicRoute = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
// console.log(accessToken,isPublicRoute)
//   // 🔒 1. If user is NOT logged in and tries to access a protected route
//   if (!isPublicRoute && !accessToken) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // 🚫 2. If user IS logged in and tries to access a public route (like /login)
//   if (isPublicRoute && accessToken) {
//     return NextResponse.redirect(new URL('/greet', request.url));
//   }

  // ✅ 3. Otherwise, allow the request to go through
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|api).*)',
  ],
};

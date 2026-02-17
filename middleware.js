import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('liora_session');
  const { pathname } = request.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Protect sensitive API routes (except login/logout/me)
  if (pathname.startsWith('/api/') && 
      !pathname.startsWith('/api/auth/') && 
      pathname !== '/api/services') { // Allowing public services fetch
    if (!session) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};

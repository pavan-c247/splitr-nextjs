//helps enable authentication and where we will configure out protected routes, so it'll run before our app runs to check if user is signed in 


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/expenses(.*)",
  "/contacts(.*)",
  "/groups(.*)",
  "/persons(.*)",
  "/settlements(.*)",
])

export default clerkMiddleware( async (auth, req) => {
   const {userId} = await auth(); // will give user id of currently loggedin user

   if(!userId && isProtectedRoute(req)) {
    const {redirectToSignIn} = await auth();
    return redirectToSignIn();
    }

    return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";



const isUnProtectedRoute = createRouteMatcher([
    '/',
    '/sign-in',
    '/sign-up',
  ]);

  export default clerkMiddleware((auth, req) => {
    if (!isUnProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
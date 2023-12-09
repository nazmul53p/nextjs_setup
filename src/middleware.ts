import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/home", request.url));
}

// Match Path Run Middleware Function. See "Matching Paths" below to learn more
export const config = {
    matcher: "/about/:path*",
};

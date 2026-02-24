import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isDash = req.nextUrl.pathname.startsWith("/dash");
  if (!isDash) return NextResponse.next();

  const ok = req.cookies.get("dash_auth")?.value === "ok";
  if (ok) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/dash/:path*", "/dash"],
};
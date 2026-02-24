import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { pin } = await req.json().catch(() => ({}));
  const expected = process.env.DASH_PIN || "";

  if (!expected) {
    return NextResponse.json({ detail: "Server not configured" }, { status: 500 });
  }

  if (!pin || String(pin).trim() !== expected) {
    return NextResponse.json({ detail: "PIN incorrecto" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: "dash_auth",
    value: "ok",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return res;
}
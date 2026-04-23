import { NextResponse } from "next/server";
import { setAdminCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const password = String(body.password || "");

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  await setAdminCookie();
  return NextResponse.json({ ok: true });
}

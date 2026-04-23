import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "sa_admin";

export function buildAdminToken(password: string) {
  if (!password) return "";
  return crypto
    .createHash("sha256")
    .update(`${password}:${process.env.ADMIN_SESSION_SALT || "streetwear"}`)
    .digest("hex");
}

export async function isAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token === buildAdminToken(process.env.ADMIN_PASSWORD || "");
}

export async function requireAdmin() {
  const admin = await isAdmin();
  if (!admin) {
    redirect("/admin/login");
  }
}

export async function setAdminCookie() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, buildAdminToken(process.env.ADMIN_PASSWORD || ""), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });
}

export async function clearAdminCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function assertAdminApi() {
  const admin = await isAdmin();
  if (!admin) {
    throw new Error("Accès admin refusé.");
  }
}

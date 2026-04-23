import LoginForm from "./login-form";

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;
  const nextPath =
    typeof params.next === "string" && params.next.trim().length > 0
      ? params.next
      : "/admin";

  return <LoginForm nextPath={nextPath} />;
}

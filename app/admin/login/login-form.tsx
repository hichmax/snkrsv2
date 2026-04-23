"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { siteContent } from "@/content/site-content";

type LoginFormProps = {
  nextPath: string;
};

export default function LoginForm({ nextPath }: LoginFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(data?.error || "Mot de passe incorrect.");
        setLoading(false);
        return;
      }

      router.replace(nextPath || "/admin");
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Réessaie.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-white">
      <div className="grid max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] md:grid-cols-[1fr_0.95fr]">
        <div className="streetwear-grid hidden bg-black/25 p-10 md:block">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            {siteContent.admin.loginEyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-semibold">{siteContent.admin.loginTitle}</h1>
          <p className="mt-5 max-w-md text-white/55">{siteContent.admin.loginDescription}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            {siteContent.brand.name}
          </p>
          <h2 className="mt-4 text-4xl font-semibold">Connexion admin</h2>
          <p className="mt-4 text-white/55">{siteContent.admin.loginHint}</p>

          <div className="mt-8 grid gap-3">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Mot de passe"
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            {error ? <p className="text-sm text-red-400">{error}</p> : null}
            <button
              disabled={loading}
              className="rounded-full bg-lime-300 px-5 py-3 font-semibold text-black disabled:opacity-50"
            >
              {loading ? "Connexion..." : siteContent.admin.loginButton}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

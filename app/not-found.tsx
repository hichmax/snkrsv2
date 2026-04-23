import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-white">
      <div className="max-w-xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page introuvable</h1>
        <p className="mt-4 text-white/55">
          Le lien demandé n’existe pas dans cette V2. Reviens au catalogue principal.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-lime-300 px-5 py-3 font-semibold text-black"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}

import { siteContent } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 text-white/45 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/35">
            {siteContent.brand.name}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {siteContent.brand.footerHeadline}
          </h3>
        </div>
        <div className="grid gap-1 text-sm">
          {siteContent.brand.footerLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { siteContent } from "@/content/site-content";

export function Marquee() {
  const items = siteContent.marquee;

  return (
    <div className="marquee-shell">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            <span className="mr-6 h-1.5 w-1.5 rotate-45 bg-[var(--electric)] shadow-[0_0_12px_var(--electric)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

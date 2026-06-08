import { siteContent } from "@/content/site-content";

export function Marquee() {
  const items = siteContent.marquee;

  return (
    <div className="marquee-shell">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            <span className="mr-6 h-1.5 w-1.5 rotate-45 bg-lime-300" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

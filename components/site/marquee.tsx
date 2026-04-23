import { siteContent } from "@/content/site-content";

export function Marquee() {
  const items = siteContent.marquee;

  return (
    <div className="marquee-shell">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

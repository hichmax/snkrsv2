export function LiquidGlassBackground() {
  return (
    <div className="liquid-home-background" aria-hidden="true">
      <div className="liquid-home-orb liquid-home-orb-main" />
      <div className="liquid-home-orb liquid-home-orb-blue" />
      <div className="liquid-home-orb liquid-home-orb-gold" />
      <div className="liquid-home-type-cloud">
        {[
          "SNEAKERS ADDICT",
          "DROP",
          "RARE PAIRS",
          "CATALOG",
          "STREETWEAR",
          "SELECTED",
          "AUTHENTIC",
          "LACES",
          "SOLE",
          "ARCHIVE"
        ].map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
      <div className="liquid-home-mesh" />
      <div className="liquid-home-vignette" />
    </div>
  );
}

import Image from "next/image";

export function HighlightCard({ highlight, index = 0 }) {
  return (
    <a className="highlight-card" href={highlight.url} target="_blank" rel="noreferrer">
      <div className="highlight-media">
        <Image src={highlight.image || "/images/ascent-mid.svg"} alt="" fill sizes="40vw" />
        <span className="play-button">▶</span>
        <span className="duration">{highlight.duration}</span>
      </div>
      <div className="highlight-content">
        <h3>{highlight.title}</h3>
        <div>
          <span>{highlight.map}</span>
          <span>{highlight.date}</span>
        </div>
      </div>
    </a>
  );
}

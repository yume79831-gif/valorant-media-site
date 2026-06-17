import Image from "next/image";
import Link from "next/link";

export function StrategyCard({ strategy }) {
  return (
    <Link className="strategy-card" href={`/strategies/${strategy.slug}`}>
      <div className="strategy-image">
        <Image src={strategy.image || "/images/haven-retake.svg"} alt="" fill sizes="40vw" />
        <span>{strategy.number}</span>
      </div>
      <div className="strategy-content">
        <div className="card-meta">
          <span>{strategy.map}</span>
          <span>{strategy.side}</span>
        </div>
        <h3>{strategy.title}</h3>
        <p>{strategy.summary}</p>
        <div className="difficulty">
          <span>難易度</span>
          <strong>{strategy.difficulty}</strong>
        </div>
      </div>
    </Link>
  );
}

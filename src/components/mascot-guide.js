import Image from "next/image";

export function MascotGuide({ children, side = "left", compact = false }) {
  return (
    <div className={`mascot-guide is-${side} ${compact ? "is-compact" : ""}`}>
      <div className="mascot-image">
        <Image
          src="/images/shumi-varo-guide.png"
          alt="趣味ヴァロの案内キャラクター"
          fill
          sizes={compact ? "90px" : "180px"}
        />
      </div>
      <div className="mascot-bubble">{children}</div>
    </div>
  );
}

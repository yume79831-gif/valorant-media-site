import Link from "next/link";
import { MascotGuide } from "@/components/mascot-guide";

const sections = [
  { href: "/articles", number: "01", label: "記事", accent: "READ" },
  { href: "/highlights", number: "02", label: "ハイライト", accent: "WATCH" },
  { href: "/strategies", number: "03", label: "作戦", accent: "LEARN" }
];

export default function HomePage() {
  return (
    <div className="geometry-home">
      <section className="geometry-hero">
        <div className="geometry-copy">
          <div className="geometry-heading">
            <span>VALORANT PERSONAL MEDIA</span>
            <h1>
              趣味
              <br />
              ヴァロ
            </h1>
          </div>

          <MascotGuide compact>気になるところから見てね！</MascotGuide>

          <nav className="geometry-nav" aria-label="コンテンツ">
            {sections.map((section) => (
              <Link href={section.href} key={section.href}>
                <span className="geometry-nav-number">{section.number}</span>
                <span className="geometry-nav-label">{section.label}</span>
                <span className="geometry-nav-accent">{section.accent}</span>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </nav>
        </div>

        <div className="geometry-visual" aria-hidden="true">
          <span className="geometry-grid" />
          <span className="geometry-orbit geometry-orbit-one" />
          <span className="geometry-orbit geometry-orbit-two" />
          <span className="geometry-orbit geometry-orbit-three" />
          <span className="geometry-core">
            <i />
            <i />
            <i />
          </span>
          <span className="geometry-corner geometry-corner-top" />
          <span className="geometry-corner geometry-corner-bottom" />
          <span className="geometry-cross geometry-cross-one">+</span>
          <span className="geometry-cross geometry-cross-two">+</span>
          <span className="geometry-index">SHUMI / VALO</span>
        </div>
      </section>

      <div className="geometry-ticker" aria-hidden="true">
        <span>READ</span>
        <i />
        <span>WATCH</span>
        <i />
        <span>LEARN</span>
        <i />
        <span>PLAY</span>
      </div>
    </div>
  );
}

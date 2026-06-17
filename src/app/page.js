import Link from "next/link";
import { MascotGuide } from "@/components/mascot-guide";

const sections = [
  { href: "/articles", label: "記事" },
  { href: "/highlights", label: "ハイライト" },
  { href: "/strategies", label: "作戦" }
];

export default function HomePage() {
  return (
    <div className="simple-home">
      <section className="simple-home-hero">
        <div>
          <h1>趣味ヴァロ</h1>
          <MascotGuide>気になるところから見てね！</MascotGuide>
        </div>
      </section>

      <nav className="simple-section-grid" aria-label="コンテンツ">
        {sections.map((section) => (
          <Link href={section.href} key={section.href}>
            <h2>{section.label}</h2>
            <b>→</b>
          </Link>
        ))}
      </nav>
    </div>
  );
}

import { MascotGuide } from "@/components/mascot-guide";

export function PageHero({ title, guide, children }) {
  return (
    <section className="page-hero">
      <div className="simple-page-hero">
        <h1>{title}</h1>
        <MascotGuide>{guide || `${title}を見ていこう！`}</MascotGuide>
      </div>
      {children}
    </section>
  );
}

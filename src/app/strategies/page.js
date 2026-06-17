import { LocalCollection } from "@/components/local-collection";
import { PageHero } from "@/components/page-hero";
import { strategies } from "@/data/content";

export const metadata = { title: "作戦一覧" };

export default function StrategiesPage() {
  return (
    <>
      <PageHero
        title="作戦"
        guide="マップに合う作戦を探そう！"
      />
      <section className="content-section archive-section">
        <LocalCollection type="strategies" fallback={strategies} />
      </section>
    </>
  );
}

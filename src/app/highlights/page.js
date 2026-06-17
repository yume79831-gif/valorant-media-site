import { LocalCollection } from "@/components/local-collection";
import { PageHero } from "@/components/page-hero";
import { highlights } from "@/data/content";

export const metadata = { title: "ハイライト" };

export default function HighlightsPage() {
  return (
    <>
      <PageHero
        title="ハイライト"
        guide="見たい動画を選んでね！"
      />
      <section className="content-section archive-section">
        <LocalCollection type="highlights" fallback={highlights} />
      </section>
    </>
  );
}

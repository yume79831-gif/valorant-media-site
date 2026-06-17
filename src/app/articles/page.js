import { LocalCollection } from "@/components/local-collection";
import { PageHero } from "@/components/page-hero";
import { articles } from "@/data/content";

export const metadata = { title: "記事一覧" };

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="記事"
        guide="読みたい記事を選んでね！"
      />
      <section className="content-section archive-section">
        <LocalCollection type="articles" fallback={articles} />
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MascotGuide } from "@/components/mascot-guide";
import { articles } from "@/data/content";

const affiliateAds = [
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5TC5+9MIAUQ+5HXK+5YZ75",
    image: "https://www27.a8.net/svt/bgt?aid=260611781582&wid=001&eno=01&mid=s00000025652001003000&mc=1",
    tracker: "https://www19.a8.net/0.gif?a8mat=4B5TC5+9MIAUQ+5HXK+5YZ75"
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5TC5+9LWV8Y+XTI+15VUEP",
    image: "https://www24.a8.net/svt/bgt?aid=260611781581&wid=001&eno=01&mid=s00000004383007035000&mc=1",
    tracker: "https://www14.a8.net/0.gif?a8mat=4B5TC5+9LWV8Y+XTI+15VUEP"
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5WG7+CDXOVM+5WQC+5YZ75",
    image: "https://www24.a8.net/svt/bgt?aid=260615815749&wid=001&eno=01&mid=s00000027570001003000&mc=1",
    tracker: "https://www14.a8.net/0.gif?a8mat=4B5WG7+CDXOVM+5WQC+5YZ75"
  },
  {
    type: "product",
    href: "https://rpx.a8.net/svt/ejp?a8mat=4B5TC5+A4YQLU+2HOM+BWGDT&rakuten=y&a8ejpredirect=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2Fg00qo2r4.2bo11965.g00qo2r4.2bo12539%2Fa26061124144_4B5TC5_A4YQLU_2HOM_BWGDT%3Fpc%3Dhttps%253A%252F%252Fitem.rakuten.co.jp%252Flikaman%252F913208-24%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252Flikaman%252Fi%252F10030059%252F%26rafcid%3Dwsc_i_is_a9f492a7-8ef9-40e2-ab89-4bc43a1ee283",
    image: "https://thumbnail.image.rakuten.co.jp/@0_mall/likaman/cabinet/rakuten7/913208-24.jpg?_ex=128x128",
    title: "【ケース購入がお得】アサヒ モンスター エナジー 355ml 24本 ケース販売 送料無料 モンスター エナジードリンク GLY",
    price: "4334円",
    checkedAt: "2026/6/16 18:17時点",
    review: "感想(71件)",
    tracker: "https://www12.a8.net/0.gif?a8mat=4B5TC5+A4YQLU+2HOM+BWGDT"
  }
];

export const dynamicParams = false;

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  return {
    title: article ? article.title : "記事詳細"
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="detail-page">
      <header className="article-detail-hero">
        <div className="detail-copy">
          <div className="page-kicker"><span>{article.category}</span><span>{article.date}</span></div>
          <span className="detail-map">{article.map}</span>
          <h1>{article.title}</h1>
          {article.excerpt ? <p>{article.excerpt}</p> : null}
          <div className="detail-meta">
            <span>{article.readTime} READ</span>
            <span>趣味ヴァロ</span>
          </div>
        </div>
        <div className="detail-image media-frame">
          <Image
            className={article.imageFit === "contain" ? "is-contain" : ""}
            src={article.image || "/images/lotus-attack.svg"}
            alt={`${article.map}の戦術イメージ`}
            fill
            priority
            sizes="55vw"
          />
          {article.imageFit === "contain" ? null : <span className="scan-line" />}
        </div>
      </header>

      <div className="article-body-shell">
        <aside className="detail-sidebar">
          <span>ON THIS FILE</span>
          {(article.sections || []).map((section, index) => (
            <a href={`#section-${index + 1}`} key={section.title}>
              <b>{String(index + 1).padStart(2, "0")}</b>{section.title}
            </a>
          ))}
          <div className="affiliate-sidebar" aria-label="PR広告">
            <div className="affiliate-heading">
              <span>PR</span>
              <b>おすすめ</b>
            </div>
            {affiliateAds.map((ad, index) => (
              <div className="affiliate-card" key={ad.href}>
                <span>PR</span>
                {ad.type === "product" ? (
                  <table className="affiliate-product" cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td className="affiliate-product-image">
                          <a href={ad.href} rel="nofollow sponsored noopener noreferrer" target="_blank">
                            <img alt="" src={ad.image} loading="lazy" />
                          </a>
                        </td>
                        <td className="affiliate-product-copy">
                          <p>
                            <a href={ad.href} rel="nofollow sponsored noopener noreferrer" target="_blank">
                              {ad.title}
                            </a>
                          </p>
                          <p>
                            価格:<strong>{ad.price}</strong><br />
                            <small>({ad.checkedAt})</small><br />
                            <b>{ad.review}</b>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <a href={ad.href} rel="nofollow sponsored noopener noreferrer" target="_blank">
                    <img width="300" height="250" alt={`PR広告 ${index + 1}`} src={ad.image} loading="lazy" />
                  </a>
                )}
                <img className="affiliate-tracker" width="1" height="1" alt="" src={ad.tracker} />
              </div>
            ))}
          </div>
        </aside>

        <div className="article-prose">
          <MascotGuide>この記事を一緒に見ていこう！</MascotGuide>
          {article.mainVideoUrl ? (
            <div className="video-source-card">
              <span>{article.mainVideoLabel || "本動画"}</span>
              <a href={article.mainVideoUrl} target="_blank" rel="noreferrer">
                {article.mainVideoUrl}
              </a>
            </div>
          ) : null}
          {article.excerpt ? <p className="lead-copy">{article.excerpt}</p> : null}
          {(article.sections || []).map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title}>
              <span className="section-code">POINT / {String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.referenceUrl ? (
                <a className="reference-link" href={section.referenceUrl} target="_blank" rel="noreferrer">
                  参考URLを見る →
                </a>
              ) : null}
              {section.body && section.body !== section.thought ? (
                <div className="section-body-note">
                  {String(section.body)
                    .split("\n")
                    .filter(Boolean)
                    .map((line, lineIndex) => (
                      <p key={`${section.title}-${lineIndex}`}>{line}</p>
                    ))}
                </div>
              ) : null}
              {section.thought || section.body ? (
                <div className="thought-card">
                  <span>思考</span>
                  <MascotGuide side={index % 2 === 0 ? "left" : "right"} compact>
                    <p>{section.thought || section.body}</p>
                  </MascotGuide>
                </div>
              ) : null}
            </section>
          ))}
          <footer className="detail-end">
            <h2>次の記事も見てみよう！</h2>
            <Link className="button button-primary" href="/articles">記事一覧へ <span>→</span></Link>
          </footer>
        </div>
      </div>
    </article>
  );
}

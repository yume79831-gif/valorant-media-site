import Image from "next/image";
import Link from "next/link";

export function ArticleCard({ article, index = 0, large = false }) {
  const slugNumber = String(article.slug || "").match(/^no(\d+)$/i)?.[1];
  const articleNumber = slugNumber || String(index + 1);

  return (
    <Link className={`article-card ${large ? "is-large" : ""}`} href={`/articles/${article.slug}`}>
      <div className="media-frame">
        <Image
          className={article.imageFit === "contain" ? "is-contain" : ""}
          src={article.image || "/images/lotus-attack.svg"}
          alt=""
          fill
          sizes={large ? "70vw" : "40vw"}
        />
        <span className="card-index">{articleNumber.padStart(2, "0")}</span>
        <span className="map-chip">{article.map}</span>
      </div>
      <div className="article-card-content">
        <div className="card-meta">
          <span>{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3>{article.title}</h3>
        {article.excerpt ? <p>{article.excerpt}</p> : null}
        <span className="read-link">読む <b>→</b></span>
      </div>
    </Link>
  );
}

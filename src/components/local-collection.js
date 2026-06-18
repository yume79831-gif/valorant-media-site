"use client";

import { useEffect, useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { HighlightCard } from "@/components/highlight-card";
import { StrategyCard } from "@/components/strategy-card";

const ITEMS_PER_PAGE = 6;

function getArticleNumber(slug = "") {
  const match = String(slug).match(/^no(\d+)$/i);
  return match ? Number(match[1]) : 0;
}

export function LocalCollection({ type, fallback = [], limit, className = "" }) {
  const items = useMemo(() => {
    const collection = Array.isArray(fallback) ? fallback : [];

    if (type !== "articles") {
      return collection;
    }

    return [...collection].sort((a, b) => {
      const dateOrder = String(b.date || "").localeCompare(String(a.date || ""));
      return dateOrder || getArticleNumber(b.slug) - getArticleNumber(a.slug);
    });
  }, [fallback, type]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [type, items.length]);

  const paginated = !limit && items.length > ITEMS_PER_PAGE;
  const pageCount = paginated ? Math.ceil(items.length / ITEMS_PER_PAGE) : 1;
  const startIndex = paginated ? (page - 1) * ITEMS_PER_PAGE : 0;
  const visible = limit
    ? items.slice(0, limit)
    : items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const classNames = [
    type === "articles" ? "article-grid" : "",
    type === "highlights" ? "highlight-grid" : "",
    type === "strategies" ? "strategy-grid" : "",
    className
  ].filter(Boolean).join(" ");

  if (visible.length === 0) {
    const labels = {
      articles: "記事",
      highlights: "ハイライト",
      strategies: "作戦"
    };
    return <div className="content-empty">まだ{labels[type]}はありません。</div>;
  }

  return (
    <>
      <div className={classNames}>
        {visible.map((item, index) => {
          const itemIndex = startIndex + index;
          if (type === "articles") {
            return <ArticleCard article={item} index={itemIndex} key={item.slug} large={itemIndex === 0 && className.includes("featured")} />;
          }
          if (type === "highlights") {
            return <HighlightCard highlight={item} index={itemIndex} key={item.id} />;
          }
          return <StrategyCard strategy={item} key={item.slug} />;
        })}
      </div>

      {pageCount > 1 ? (
        <nav className="pagination" aria-label="ページネーション">
          <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1}>
            前へ
          </button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
            <button
              className={pageNumber === page ? "is-active" : ""}
              type="button"
              onClick={() => setPage(pageNumber)}
              aria-current={pageNumber === page ? "page" : undefined}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          ))}
          <button type="button" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={page === pageCount}>
            次へ
          </button>
        </nav>
      ) : null}
    </>
  );
}

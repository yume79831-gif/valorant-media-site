import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand brand-footer" href="/">
        <span className="brand-mark">趣</span>
        <span className="brand-name">趣味ヴァロ</span>
      </Link>
      <div className="footer-links">
        <Link href="/articles">記事</Link>
        <Link href="/highlights">ハイライト</Link>
        <Link href="/strategies">作戦</Link>
      </div>
      <span className="footer-copy">© 2026 趣味ヴァロ</span>
    </footer>
  );
}

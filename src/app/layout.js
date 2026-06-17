import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: {
    default: "趣味ヴァロ",
    template: "%s | 趣味ヴァロ"
  },
  description: "VALORANTの記事、ハイライト、作戦を楽しむ趣味メディア。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="site-grid" aria-hidden="true" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

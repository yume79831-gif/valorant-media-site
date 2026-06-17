"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/articles", label: "記事" },
  { href: "/highlights", label: "ハイライト" },
  { href: "/strategies", label: "作戦" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <span className="brand-mark">趣</span>
        <span className="brand-name">趣味ヴァロ</span>
      </Link>

      <button
        className={`nav-trigger ${open ? "is-open" : ""}`}
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={`global-nav ${open ? "is-open" : ""}`} aria-label="メインナビゲーション">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              className={active ? "is-active" : ""}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

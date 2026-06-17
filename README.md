# 趣味ヴァロ

Valorantの試合メモ、ハイライト、作戦解説をまとめるための個人メディアサイトです。

公式ロゴや公式素材は使わず、赤・黒・白を基調にした近未来FPS風のデザインで作成しています。

## 使用技術

- Next.js App Router
- React
- Static Export
- ローカルJSONデータ管理

## ページ構成

- `/` トップページ
- `/articles` 記事一覧
- `/articles/[slug]` 記事詳細
- `/highlights` ハイライト一覧
- `/strategies` 作戦一覧
- `/strategies/[slug]` 作戦詳細

## データ管理

記事、ハイライト、作戦データは `data/content.json` で管理しています。

管理画面やAPIは使わず、`data/content.json` を編集して記事を追加する静的サイト運用です。

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 静的ビルド

```bash
npm run build
```

`next.config.mjs` で `output: "export"` を設定しているため、ビルド後は `out/` に静的ファイルが出力されます。

## デプロイ方針

Vercel CLIは使わず、GitHubリポジトリとVercelを連携して自動デプロイします。

GitHubへpushしたあと、Vercelの管理画面からこのリポジトリをImportしてください。

# content-brief-engine

content-brief-engine は、テーマ・読者・検索意図・CTA を入力すると、コンテンツ制作チーム向けのブリーフ草案を生成する静的Webアプリです。

## 機能

- テーマ、読者、目的、チャネル、検索意図、CTA の入力
- ブリーフ本文の自動生成
- 生成結果のワンクリックコピー
- Vite によるローカル開発と本番ビルド

## 開発

```bash
npm install
npm run dev
```

## 品質確認

```bash
npm run lint
npm run build
```

## 公開URL

本番URLが決まっている場合は、ビルド前に `VITE_PUBLIC_SITE_URL` を設定すると `public/robots.txt` と `public/sitemap.xml` がそのURLで生成されます。

```bash
set VITE_PUBLIC_SITE_URL=https://example.com
npm run build
```

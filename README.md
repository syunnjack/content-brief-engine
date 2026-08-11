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

## Vercel デプロイ

`vercel.json` で Vite の出力先を `dist` に固定しています。Vercel 側では次の1点だけ設定すれば公開できます。

- Environment Variable: `VITE_PUBLIC_SITE_URL=https://<your-domain>`

ローカルでは `.env.example` をコピーして `.env.local` を作っても運用できます。

## 公開後の最終確認

1. トップページが表示される
2. 入力フォームからブリーフ本文が生成される
3. 「コピー」ボタンで生成結果をクリップボードへコピーできる
4. `https://<your-domain>/robots.txt` が本番ドメインを返す
5. `https://<your-domain>/sitemap.xml` が本番ドメインを返す
6. title と meta description が意図どおりに出ている

## Vercel 側の設定メモ

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `VITE_PUBLIC_SITE_URL`

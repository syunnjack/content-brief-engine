"use client";

import { useMemo, useState } from "react";

const revenueByCategory: Record<string, string[]> = {
  "車・カー用品": ["適合商品購入", "整備・取付予約", "車検・保険見積り"],
  "書籍・コミック": ["紙書籍購入", "電子書籍登録", "中古買取・イベント予約"],
  "コスメ・美容": ["商品購入", "店舗・サロン予約", "定期購入"],
  "家電・ガジェット": ["商品購入", "延長保証", "設置・回収サービス"],
  "推し活・イベント": ["チケット・ホテル", "交通・駐車場", "グッズ・通信用品"],
};

export default function Home() {
  const [area, setArea] = useState("横浜市港北区");
  const [category, setCategory] = useState("車・カー用品");
  const [identifier, setIdentifier] = useState("6AA-ZVW60");
  const [offer, setOffer] = useState("ドライブレコーダー取付");
  const [generated, setGenerated] = useState(false);
  const [saved, setSaved] = useState(false);
  const title = `${area}で${identifier}対応の${offer}を探す`;
  const uniqueness = useMemo(() => [area.length > 2, identifier.length > 5, offer.length > 3].filter(Boolean).length, [area, identifier, offer]);

  return <main>
    <header><a className="logo" href="#top">BRIEF<span>CRAFT</span></a><nav><a href="#builder">設計する</a><a href="#rules">公開基準</a><button onClick={()=>setSaved(true)}>下書き <b>{saved ? 1 : 0}</b></button></nav></header>
    <section className="hero" id="top"><div><p className="kicker">LOCAL COMMERCE EDITOR</p><h1>量産しない。<br/><em>役に立つ地域ページ</em>を設計する。</h1><p>市区町村と商品識別子、案件を組み合わせ、独自情報・通知・収益導線まで揃った編集企画をつくります。</p></div><aside><p>公開品質スコア</p><strong>{58 + uniqueness * 8}</strong><span>/ 100</span><div className="gauge"><i style={{width:`${58 + uniqueness * 8}%`}} /></div><small>地域固有情報と識別子が入力されています</small></aside></section>

    <section className="workspace" id="builder">
      <div className="form-card"><div className="card-head"><span>01</span><div><h2>ページの材料</h2><p>検索意図を一つに絞ります</p></div></div>
        <label>市区町村・駅<input value={area} onChange={e=>setArea(e.target.value)} /></label>
        <label>ジャンル<select value={category} onChange={e=>setCategory(e.target.value)}>{Object.keys(revenueByCategory).map(x=><option key={x}>{x}</option>)}</select></label>
        <label>JAN・ISBN・車種・品番<input value={identifier} onChange={e=>setIdentifier(e.target.value)} /></label>
        <label>紹介する案件<input value={offer} onChange={e=>setOffer(e.target.value)} /></label>
        <button className="generate" onClick={()=>setGenerated(true)}>サイト設計を作成 <span>→</span></button>
      </div>

      <div className={`brief ${generated ? "ready" : ""}`}><div className="brief-top"><div><p>提案ページ</p><h2>{title}</h2></div><span className="status">{generated ? "設計済み" : "プレビュー"}</span></div>
        <section><h3>検索者が解決したいこと</h3><p>{identifier}に合う{offer}を{area}周辺で比較し、在庫・価格・予約可能時間を確認したい。</p></section>
        <div className="two-col"><section><h3>必須の独自情報</h3><ul><li>地域内の取扱店・提供店</li><li>確認日時と情報提供元</li><li>在庫・空き・混雑の状況</li><li>交通、駐車場、対応条件</li></ul></section><section><h3>収益導線</h3><ul>{revenueByCategory[category].map(x=><li key={x}>{x}</li>)}</ul></section></div>
        <section><h3>推奨ページ構成</h3><ol><li>結論と直近の確認状況</li><li>{area}の比較一覧</li><li>{identifier}の適合・識別情報</li><li>在庫・価格・混雑と更新時刻</li><li>選び方と注意点</li><li>通知登録・予約・購入</li></ol></section>
        <div className="checks"><span>✓ 地域固有性</span><span>✓ 識別子あり</span><span>✓ 更新情報あり</span><span>✓ 広告表記必須</span></div>
        <button className="save" onClick={()=>setSaved(true)}>{saved ? "✓ 下書きに保存しました" : "この設計を下書き保存"}</button>
      </div>
    </section>

    <section className="rules" id="rules"><div><p className="kicker">EDITORIAL POLICY</p><h2>公開しない判断も、設計の一部。</h2></div><div className="rule-grid"><article><b>01</b><h3>差し替えページ禁止</h3><p>地域名以外が同じページは公開候補から除外します。</p></article><article><b>02</b><h3>出典と日時を必須化</h3><p>在庫・価格・混雑には確認元、更新日時、推定表示を付けます。</p></article><article><b>03</b><h3>利用価値で判定</h3><p>比較・通知・予約など、検索者が行動できるページだけ公開します。</p></article></div></section>
    <footer><div className="logo">BRIEF<span>CRAFT</span></div><p>Content Brief Engine — 地域型サイトの編集・収益設計支援</p><p>無断転載・無許可スクレイピング・薄い自動生成ページを前提としません。</p></footer>
  </main>;
}

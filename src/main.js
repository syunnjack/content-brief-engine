const form = document.querySelector("#brief-form");
const result = document.querySelector("#result");
const copyButton = document.querySelector("#copy-button");

function buildBrief(values) {
  const angle = `${values.audience} が ${values.intent} を解消し、最終的に ${values.cta} へ進みやすくする`;

  return [
    `# コンテンツブリーフ: ${values.topic}`,
    "",
    `- 主要読者: ${values.audience}`,
    `- 目的: ${values.goal}`,
    `- 配信チャネル: ${values.channel}`,
    `- 成功CTA: ${values.cta}`,
    "",
    "## 企画の狙い",
    `${angle} ことを主目的とする。`,
    "",
    "## 想定読者の課題",
    `- ${values.intent}`,
    "- 今すぐ比較・判断できる材料が不足している",
    "- 失敗コストを避けたいが、情報が散在している",
    "",
    "## 必ず入れるべき要素",
    `- ${values.topic} の全体像を最初に示す`,
    "- よくある誤解と判断基準を分けて書く",
    `- ${values.audience} が次の行動に移りやすい具体例を入れる`,
    `- 最後に ${values.cta} へ自然につなぐ`,
    "",
    "## 見出し案",
    `1. ${values.topic} で最初に押さえるべきポイント`,
    `2. ${values.audience} が迷いやすい論点`,
    "3. 比較チェックリスト",
    `4. ${values.cta} につなげる判断の目安`,
    "",
    "## KPI 仮説",
    "- 主要指標: CTA到達率、滞在時間、スクロール率",
    "- 補助指標: 検索流入、保存率、再訪率",
  ].join("\n");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  result.textContent = buildBrief(values);
});

copyButton.addEventListener("click", async () => {
  const text = result.textContent || "";
  if (!text || text === "ここにブリーフが表示されます。") {
    return;
  }

  await navigator.clipboard.writeText(text);
  copyButton.textContent = "コピー済み";
  window.setTimeout(() => {
    copyButton.textContent = "コピー";
  }, 1200);
});

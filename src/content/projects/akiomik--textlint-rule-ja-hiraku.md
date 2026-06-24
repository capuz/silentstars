---
repo: "akiomik/textlint-rule-ja-hiraku"
name: "textlint-rule-ja-hiraku"
description: "漢字を「ひらく」ためのtextlintルール"
url: "https://github.com/akiomik/textlint-rule-ja-hiraku"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["textlint", "textlintrule", "japanese"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2023-12-04T16:33:58Z"
lastCommitAt: "2026-06-24T00:20:49Z"
lastReleaseAt: "2026-06-21T14:24:59Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 79
maintainers: ["akiomik", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ec97d32f43e79c5b2caaf685167ec3da095e25ebe4fca9d400d3668a417f6d/akiomik/textlint-rule-ja-hiraku"
fundingLinks: ["GITHUB:https://github.com/akiomik", "KO_FI:https://ko-fi.com/akiomik"]
---

# textlint-rule-ja-hiraku

`textlint-rule-ja-hiraku` は漢字を「ひらく」ためのtextlintルールです。

「ひらく」というのは、漢字の読みや文字から受ける印象を考慮し一部をひらがなで表記することで、読みやすく誤読しにくい文章へと変えることです。
漢字とひらがな、どちらで書くかが統一されるので、表記揺れを減らすことにも繋がります。

例:

```
丁度良かった。色々話を聞いて頂きたいと思っていた所でした。
↓
ちょうどよかった。いろいろ話を聞いていただきたいと思っていたところでした。
```

## インストール

```bash
npm install -g textlint-rule-ja-hiraku
```

## 使い方

`.textlintrc.json` を利用する場合 (推奨):

```json
{
  "rules": {
    "ja-hiraku": true
  }
}
```

CLIから利用する場合:

```bash
textlint --rule ja-hiraku README.md
```

## 設定

形態素の品詞ごとにチェックするかどうかを切り替え可能です。

デフォルトでは全てチェック対象となっていますが、
ほどんどのケースでは以下のように代名詞・副助詞・副詞・補助動詞・補助形容詞・形式名詞・連体詞・接続詞のチェックだけで十分かもしれません。

```jsonc
{
  "rules": {
    "ja-hiraku": {
      "daimeishi": true,        // 代名詞のチェック (default: true)
      "fukujoshi": true,        // 副助詞のチェック (default: true)
      "fukushi": true,          // 副詞のチェック (default: true)
      "hojodoushi": true,       // 補助動詞のチェック (default: true)
      "hojokeiyoushi": true,    // 補助形容詞のチェック (default: true)
      "keishikimeishi": true,   // 形式名詞のチェック (default: true)
      "other-doushi": false,    // その他 (動詞) のチェック (default: true)
      "other-jodoushi": false,  // その他 (助動詞) のチェック (default: true)
      "other-kandoushi":…

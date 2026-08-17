---
repo: "kufu/textlint-rule-preset-smarthr"
name: "textlint-rule-preset-smarthr"
description: "SmartHRらしい文書を書くための、textlintルールプリセットを提供します。"
readmeQualityOk: true
url: "https://github.com/kufu/textlint-rule-preset-smarthr"
homepage: "https://smarthr.design/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 42]
stars: 120
forks: 21
openIssues: 0
closedIssues: 70
watchers: 70
contributors: 395
recentReleases: 0
createdAt: "2021-02-21T15:08:59Z"
lastCommitAt: "2026-08-17T04:18:30Z"
lastReleaseAt: "2021-09-10T03:56:34Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 40
maintainers: ["renovate[bot]", "chick-p", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69996b5e6b851e57c5402525410ab67d12b0638422df7b7767c3749bd321c8f2/kufu/textlint-rule-preset-smarthr"
---

# textlint-rule-preset-smarthr

SmartHRらしい文書を書くための、textlintルールプリセットを提供します。

## インストール

Install with [pnpm](https://pnpm.io/):

    pnpm install textlint-rule-preset-smarthr

## 使い方

Via `.textlintrc`(Recommended)

### Via CLI

```
textlint --rule preset-smarthr README.md
```

### Build

ソースコードをビルドして、`lib`フォルダに公開します。
TypeScriptのソースコードは`src/`フォルダに書くことができます。

```
pnpm run build
```

### Tests

`test`フォルダ内のテストコードを実行します。
testの詳細は[textlint-tester](https://github.com/textlint/textlint/tree/master/packages/textlint-tester)を参照してください。

```
pnpm test
```
### 基本設定

すべてのルールを有効化して使う場合は、次のように設定してください。

```json
{
  "rules": {
    "preset-smarthr": true
  }
}
```
### デフォルト設定

デフォルトでは、次のような設定になっています。個別にルールを有効・無効化することも可能です。

```json
{
  "rules": {
    "preset-smarthr": {
      "prh-rules": true,
      "ja-no-mixed-period": true,
      "no-hankaku-kana": true,
      "@textlint-rule/no-unmatched-pair": true,
      "sentence-length": {
        "max": 120
      },
      "no-doubled-conjunctive-particle-ga": true,
      "no-double-negative-ja": true,
      "ja-no-abusage": true,
      "ja-no-redundant-expression": true,
      "no-mixed-zenkaku-and-hankaku-alphabet": true,
      "ja-keishikimeishi": {…

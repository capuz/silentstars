---
repo: "FacedFour1207/mcconv"
name: "mcconv"
description: "Simple, fast Minecraft Java ⇔ Bedrock world converter / Simple and fast Minecraft Java Edition ⇔ Bedrock Edition world conversion tool"
originalDescription: "Simple, fast Minecraft Java ⇔ Bedrock world converter / 簡単・高速なマイクラJava版⇔統合版ワールド変換ツール"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/FacedFour1207/mcconv"
language: "Go"
languages: ["Go", "C"]
languagePcts: [51, 44]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-04T23:10:29Z"
lastCommitAt: "2026-11-23T13:28:31Z"
lastReleaseAt: "2026-11-18T10:51:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 22
maintainers: ["FacedFour1207"]
openGraphImageUrl: "https://opengraph.githubassets.com/c74b36c57c7a86587e9d31a23b98f916becb4351d1304a6cd38af6b683ce4f6b/FacedFour1207/mcconv"
---

# mcconv — Minecraft Java版 ⇔ 統合版 ワールド変換

**日本語** | [English](https://github.com/FacedFour1207/mcconv/blob/HEAD/README.en.md)

Minecraft の **Java版のワールドを統合版 (Bedrock) に**、**統合版のワールドを Java版に** 変換するツールです。
ダブルクリックで開く画面から、ワールドを選んでボタンを押すだけで変換できます。

- **速い** — 同じワールドの変換が Amulet の約 130〜160 倍速。6GB のワールドも約 30 秒です ([速さの比較](#速さと正確さ))
- **正確** — 変換したワールドを本物の Bedrock / Java サーバーで読み込んで確認しています
- **かんたん** — exe 1 つ。インストール不要で、PC 内のワールドを自動で見つけ、ゲームのワールド一覧に直接保存します

## 使い方

1. [Releases](https://github.com/FacedFour1207/mcconv/blob/HEAD/../../releases) から `mcconv-windows-x64.zip` をダウンロードして、好きな場所に展開します。
2. `mcconv.exe` をダブルクリックします。
   - 「Windows によって PC が保護されました」と出たら、「詳細情報」→「実行」を押してください (署名のないアプリに出る表示です)。
3. 左側に、PC 内の Java版 と 統合版 のワールドが自動で並びます。変換したいワールドをクリックします。
   - ほかの場所にあるワールドは「フォルダから開く」で選べます。
4. 右側の「変換を開始」を押します。
5. 終わったらゲームを起動してください。変換したワールドがワールド一覧に出ています。

元のワールドは変更しません。変換中は、そのワールドをゲームで開かないでください。

---
repo: "boatraceopenapi/programs"
name: "programs"
description: "🚤 Boatrace Open API for Programs"
url: "https://github.com/boatraceopenapi/programs"
homepage: "https://boatraceopenapi.github.io/programs/v2/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["boatrace", "php", "php8", "api", "json-api", "open-api", "php-api", "php-scraper", "php8-api", "boatrace-api"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 22
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-09T23:47:54Z"
lastCommitAt: "2026-06-28T01:44:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 78
maintainers: ["github-actions[bot]", "shimomo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/295433eaef72a904bd426886e164aa32b0922de2ae11931c043228b7bddfcb82/boatraceopenapi/programs"
discussionCount: 0
---

# 🚤 Boatrace Open API for Programs

## ⚠️ 注意事項

> ⚡ 本 API は**非公式**であり、BOATRACE 公式サイト・団体とは一切関係ありません。<br>
> 🕒 データはリアルタイム更新ではなく、**約30分間隔で更新**されます。（ GitHub Actions のスケジュールは cron.yml を参照 ）<br>
> 🔍 データの正確性・完全性を保証するものではありません。<br>
> 🙇‍♂️ 利用は自己責任でお願いします。

## 📌 概要

この API では、ボートレース（ 競艇 ）の出走表データを取得できます。<br>
データは GitHub Pages 上で公開されており、JSON 形式で提供されます。

## 🌐 エンドポイント

### [](https://github.com/BoatraceOpenAPI/programs/tree/gh-pages/docs/v3)

> 📅 対応期間: 2023年05月01日以降

```bash
https://boatraceopenapi.github.io/programs/v3/YYYY/YYYYMMDD.json
```

### [](https://github.com/BoatraceOpenAPI/programs/tree/gh-pages/docs/v2)

> 📅 対応期間: 2025年05月01日以降

```bash
https://boatraceopenapi.github.io/programs/v2/YYYY/YYYYMMDD.json
```

📅 YYYY → 年<br>
📅 YYYYMMDD → 年月日<br>
（ 日付は日本標準時 JST〔UTC+9〕基準 ）

※ 仕様上の欠陥により v1 は破棄されました。

## 🧩 サンプル

### [](https://github.com/BoatraceOpenAPI/programs/tree/gh-pages/docs/v3)

- 2025年05月01日の出走表
  - [https://boatraceopenapi.github.io/programs/v3/2025/20250501.json](https://boatraceopenapi.github.io/programs/v3/2025/20250501.json)
- 本日の出走表（ JST〔UTC+9〕基準 ）
  - [https://boatraceopenapi.github.io/programs/v3/today.json](https://boatraceopenapi.github.io/programs/v3/today.json)…

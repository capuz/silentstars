---
repo: "boatraceopenapi/results"
name: "results"
description: "[Deprecated] A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / GitHub Actions と GitHub Pages を利用してボートレース（競艇）の API を公開するプロジェクト"
readmeQualityOk: true
url: "https://github.com/boatraceopenapi/results"
homepage: "https://boatraceopenapi.github.io/results/v3/today.json"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["boatrace", "php", "api"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-10T00:21:20Z"
lastCommitAt: "2026-08-25T04:08:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 82
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2650bcf3ee458d47177e369a815e33804968770c8bdf78ef0c28ee1af482366/boatraceopenapi/results"
---

# 🚤 Boatrace Open API for Results

## 🛑 非推奨のお知らせ

> ⚠️ 本リポジトリ（Boatrace Open API for Results）は**今後の利用が推奨されません**。<br>
> 
> 👉 今後は後継リポジトリの [boatraceopenapi/api](https://github.com/boatraceopenapi/api) をご利用ください。
> 
> ℹ️ なお、非推奨ではありますが本リポジトリのデータ更新・API 提供自体は**引き続き稼働しています**。<br>
> 既存の利用箇所を直ちに移行する必要はなく、現状のまま継続してご利用いただくことも可能です。<br>
> ただし、将来的に更新が停止される可能性もあるため、可能な範囲で後継 API への移行をご検討ください。

## ⚠️ 注意事項

> **本 API を利用する前に、以下の内容をご確認ください。**
>
> - ⚡ **本 API は非公式です。**
>   BOATRACE 公式サイトおよび関連団体とは一切関係ありません。
>
> - 🕒 **データはリアルタイムではありません。**
>   GitHub Actions による約 3 時間間隔の定期更新を行っています。リアルタイム配信ではないため、最新の情報が反映されるまで数時間程度の遅れが生じる場合があります。
>
> - 📊 **データの正確性・完全性は保証していません。**
>   収集・変換の都合により、欠損や誤りが含まれる可能性があります。
>
> - 🚫 **公式な情報が必要な場合は、必ず BOATRACE 公式サイトをご確認ください。**
>
> - 🙇‍♂️ **本 API の利用は自己責任でお願いします。**

## 📌 概要

この API では、ボートレース（競艇）のデータを取得できます。<br>
データは GitHub Pages 上で公開されており、JSON 形式で提供されます。

- **対応レース場**: 全国 24 場すべてに対応しています。特定のレース場のみを取り出すエンドポイントはなく、1 日分のデータに全場の情報が含まれます。
- **取得可能なデータ**: 結果

## 🌐 エンドポイント

### [](https://github.com/boatraceopenapi/results/tree/gh-pages/docs/v3)

> 📅 対応期間: 2025年05月01日以降

```bash
https://boatraceopenapi.github.io/results/v3/YYYY/YYYYMMDD.json
```

###…

---
repo: "dai/o-sumo"
name: "o-sumo"
description: "大相撲APIs, Skillsを公開します(番付|星取|取組予定|取組結果)令和8年3月場所から。最下部に辞書あり | Sumo data, Shikona dictionaries, and scores. since 2026"
readmeQualityOk: true
url: "https://github.com/dai/o-sumo"
homepage: "https://osada.us"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["codex", "sumo", "api", "mvp"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T05:08:26Z"
lastCommitAt: "2026-08-24T04:22:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 49
maintainers: ["dai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168180630/d9cb9c3c-780e-4f05-aee1-afe64f80df2c"
fundingLinks: ["GITHUB:https://github.com/dai", "PATREON:https://patreon.com/osada", "OPEN_COLLECTIVE:https://opencollective.com/dai", "POLAR:https://polar.sh/dai"]
---

# o-sumo

[English README](https://github.com/dai/o-sumo/blob/HEAD/README_en.md)

o-sumo は、大相撲の番付、取組、力士・行司・呼出名鑑を配信する静的 Web アプリです。React 19 + TypeScript + Vite で構築し、Cloudflare Pages から静的サイトと静的 JSON API を公開しています。

## ドキュメント一覧

- README: `README.md` / `README_en.md`
- 開発ガイド: `DEVELOPMENT.md` / `DEVELOPMENT_en.md`
- Skills 一覧: `SKILLS.md` / `SKILLS_en.md`
- API 仕様: `docs/api/v1.md` / `docs/api/v1.en.md`
- API ポリシー: `docs/api/policy.md` / `docs/api/policy.en.md`
- API 変更履歴: `docs/api/changelog.md` / `docs/api/changelog.en.md`
- 力士プロフィール・合い口更新手順: `docs/rikishi-profile-refresh-runbook.md`
- 行司・呼出データ更新手順: `docs/official-profile-refresh-runbook.md`

## 概要

- Web ルート:
  - ホーム: `/`
  - 過去場所一覧: `/archives`
  - 力士一覧: `/rikishi`
  - 力士プロフィール: `/rikishi/{id}`
  - マイ力士: `/my-rikishi/`
  - 力士比較: `/compare/?ids={id1},{id2}`
  - 行司名鑑: `/gyoji/`
  - 行司プロフィール: `/gyoji/{id}/`
  - 呼出名鑑: `/yobidashi/`
  - 呼出プロフィール: `/yobidashi/{id}/`
  - 番付: `/{YYYYMM}-banzuke/`
  - 結果ハブ: `/{YYYYMM}-torikumi`
  - 予定ハブ: `/{YYYYMM}-yotei`
  - 日別結果: `/{YYYYMMDD}-torikumi`
  - 日別予定: `/{YYYYMMDD}-yotei`
  - 決まり手: `/kimarite`
  - 場所ステータス分析: `/analytics/`
- 現行ルート例:
  - `/202607-banzuke/`
  - `/202607-torikumi`
  -…

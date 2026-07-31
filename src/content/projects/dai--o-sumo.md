---
repo: "dai/o-sumo"
name: "o-sumo"
description: "大相撲APIs, Skillsを公開します(番付|星取|取組予定|取組結果)令和8年3月場所から。最下部に辞書あり | Sumo data, Shikona dictionaries, and scores. since 2026"
readmeQualityOk: true
url: "https://github.com/dai/o-sumo"
homepage: "https://osada.us"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["codex", "sumo", "api", "mvp"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T05:08:26Z"
lastCommitAt: "2026-07-31T06:29:57Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 48
maintainers: ["dai", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1168180630/d9cb9c3c-780e-4f05-aee1-afe64f80df2c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063205Z&X-Amz-Expires=300&X-Amz-Signature=21365f59bf21a046413bbc4696a8e63975681cf216bbb7576aea88f15f4e4b64&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgyNSwibmJmIjoxNzg1NDc5NTI1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.bmAOQChCMtowEkZsfw0rAqtQHHcfg7RjN_U2lpjReVc"
fundingLinks: ["GITHUB:https://github.com/dai", "PATREON:https://patreon.com/osada", "OPEN_COLLECTIVE:https://opencollective.com/dai", "POLAR:https://polar.sh/dai"]
---

# o-sumo

[English README](https://github.com/dai/o-sumo/blob/HEAD/README_en.md)

o-sumo は、大相撲の番付と取組情報を配信する静的 Web アプリです。React 19 + TypeScript + Vite で構築し、Cloudflare Pages から静的サイトと静的 JSON API を公開しています。

## ドキュメント一覧

- README: `README.md` / `README_en.md`
- 開発ガイド: `DEVELOPMENT.md` / `DEVELOPMENT_en.md`
- Skills 一覧: `SKILLS.md` / `SKILLS_en.md`
- API 仕様: `docs/api/v1.md` / `docs/api/v1.en.md`
- API ポリシー: `docs/api/policy.md` / `docs/api/policy.en.md`
- API 変更履歴: `docs/api/changelog.md` / `docs/api/changelog.en.md`

## 概要

- Web ルート:
  - ホーム: `/`
  - 過去場所一覧: `/archives`
  - 力士一覧: `/rikishi`
  - 力士プロフィール: `/rikishi/{id}`
  - 番付: `/{YYYYMM}-banzuke/`
  - 結果ハブ: `/{YYYYMM}-torikumi`
  - 予定ハブ: `/{YYYYMM}-yotei`
  - 日別結果: `/{YYYYMMDD}-torikumi`
  - 日別予定: `/{YYYYMMDD}-yotei`
  - 決まり手: `/kimarite`
- 現行ルート例:
  - `/202607-banzuke/`
  - `/202607-torikumi`
  - `/20260712-yotei`
  - `/kimarite`
- 旧番付 URL `/{YYYYMM}-o-sumo` は現行の番付 URL にリダイレクトされます。
- 公開 API:
  - `/api/v1/banzuke.json`
  - `/api/v1/torikumi.json`
  - `/api/v1/rikishi.json`
  - `/api/v1/rikishi/{id}.json`
  - `/api/v1/news.json`

関連ドキュメント:

- `docs/api/v1.md`
- `docs/api/policy.md`
- `docs/api/changelog.md`
- `DEVELOPMENT.md`

Skill…

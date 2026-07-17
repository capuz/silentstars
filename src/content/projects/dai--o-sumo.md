---
repo: "dai/o-sumo"
name: "o-sumo"
description: "Sumo data, Shikona dictionaries, and scores. since 2026"
originalDescription: "大相撲APIs, Skillsを公開します(番付|星取|取組予定|取組結果)令和8年3月場所から。最下部に辞書あり | Sumo data, Shikona dictionaries, and scores. since 2026"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/dai/o-sumo"
homepage: "https://osada.us"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["codex", "sumo", "api", "mvp"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T05:08:26Z"
lastCommitAt: "2026-07-17T06:00:16Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 51
maintainers: ["dai", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168180630/d9cb9c3c-780e-4f05-aee1-afe64f80df2c"
fundingLinks: ["GITHUB:https://github.com/dai", "PATREON:https://patreon.com/osada", "OPEN_COLLECTIVE:https://opencollective.com/dai", "POLAR:https://polar.sh/dai"]
---

# o-sumo

[English README](https://github.com/dai/o-sumo/blob/HEAD/README_en.md)

o-sumo is a static web application that delivers sumo rankings and match information. It is built with React 19 + TypeScript + Vite and publishes a static site and static JSON API from Cloudflare Pages.

## Document List

- README: `README.md` / `README_en.md`
- Development Guide: `DEVELOPMENT.md` / `DEVELOPMENT_en.md`
- Skills List: `SKILLS.md` / `SKILLS_en.md`
- API Specification: `docs/api/v1.md` / `docs/api/v1.en.md`
- API Policy: `docs/api/policy.md` / `docs/api/policy.en.md`
- API Change Log: `docs/api/changelog.md` / `docs/api/changelog.en.md`

## Overview

- Web Routes:
  - Home: `/`
  - Past Locations List: `/archives`
  - Wrestler List: `/rikishi`
  - Wrestler Profile: `/rikishi/{id}`
  - Rankings: `/{YYYYMM}-banduke`
  - Results Hub: `/{YYYYMM}-torikumi`
  - Schedule Hub: `/{YYYYMM}-yotei`
  - Daily Results: `/{YYYYMMDD}-torikumi`
  - Daily Schedule: `/{YYYYMMDD}-yotei`
  - Winning Techniques: `/kimarite`
- Current Route Examples:
  - `/202607-banduke`
  - `/202607-torikumi`
  - `/20260712-yotei`
  - `/kimarite`
- Old Ranking URL `/{YYYYMM}-o-sumo` will redirect to the current ranking URL.…

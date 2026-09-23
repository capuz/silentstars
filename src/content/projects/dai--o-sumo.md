---
repo: "dai/o-sumo"
name: "o-sumo"
description: "Sumo APIs, publishing Skills (banzuke | win-loss records | match schedules | match results) from March 2026. Dictionary at the bottom. | Sumo data, Shikona dictionaries, and scores. since 2026"
originalDescription: "大相撲APIs, Skillsを公開します(番付|星取|取組予定|取組結果)令和8年3月場所から。最下部に辞書あり | Sumo data, Shikona dictionaries, and scores. since 2026"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/dai/o-sumo"
homepage: "https://osada.us"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["codex", "sumo", "api", "mvp"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T05:08:26Z"
lastCommitAt: "2026-09-23T08:46:37Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 52
maintainers: ["github-actions[bot]", "dai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168180630/60a8d29e-b61f-4968-96a8-b7e99a647b49"
fundingLinks: ["GITHUB:https://github.com/dai", "PATREON:https://patreon.com/osada", "OPEN_COLLECTIVE:https://opencollective.com/dai", "POLAR:https://polar.sh/dai"]
discussionCount: 0
---

# o-sumo

[English README](https://github.com/dai/o-sumo/blob/HEAD/README_en.md)

o-sumo is a static web app that distributes sumo rankings, matches, and wrestler, referee, and announcer directories. It is built with React 19 + TypeScript + Vite and publishes static sites and static JSON APIs from Cloudflare Pages.

## Documentation List

- README: `README.md` / `README_en.md`
- Development Guide: `DEVELOPMENT.md` / `DEVELOPMENT_en.md`
- Skills List: `SKILLS.md` / `SKILLS_en.md`
- API Specification: `docs/api/v1.md` / `docs/api/v1.en.md`
- API Policy: `docs/api/policy.md` / `docs/api/policy.en.md`
- API Changelog: `docs/api/changelog.md` / `docs/api/changelog.en.md`
- Wrestler Profile and Head-to-Head Record Update Procedure: `docs/rikishi-profile-refresh-runbook.md`
- Referee and Announcer Data Update Procedure: `docs/official-profile-refresh-runbook.md`

## Overview

- Web Routes:
  - Home: `/`
  - Past Tournament List: `/archives`
  - Wrestler List: `/rikishi`
  - Wrestler Profile: `/rikishi/{id}`
  - My Wrestlers: `/my-rikishi/`
  - Wrestler Comparison: `/compare/?ids={id1},{id2}`
  - Referee Directory: `/gyoji/`
  - Referee Profile: `/gyoji/{id}/`
  - Announcer Directory:…

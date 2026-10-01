---
repo: "dai/o-sumo"
name: "o-sumo"
description: "Sumo APIs and Skills (rankings, records, upcoming matches, match results) from March 2026 onwards. Includes sumo data, wrestler name dictionaries, and scores."
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
lastCommitAt: "2026-10-01T10:24:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 53
maintainers: ["github-actions[bot]", "dai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168180630/60a8d29e-b61f-4968-96a8-b7e99a647b49"
fundingLinks: ["GITHUB:https://github.com/dai", "PATREON:https://patreon.com/osada", "OPEN_COLLECTIVE:https://opencollective.com/dai", "POLAR:https://polar.sh/dai"]
discussionCount: 0
---

# o-sumo

[English README](https://github.com/dai/o-sumo/blob/HEAD/README_en.md)

o-sumo is a static web application that distributes sumo rankings, matches, and directories of rikishi (wrestlers), referees, and announcers. Built with React 19 + TypeScript + Vite, it publishes static sites and static JSON APIs from Cloudflare Pages.

## Documentation List

- README: `README.md` / `README_en.md`
- Development Guide: `DEVELOPMENT.md` / `DEVELOPMENT_en.md`
- Skills List: `SKILLS.md` / `SKILLS_en.md`
- API Specification: `docs/api/v1.md` / `docs/api/v1.en.md`
- API Policy: `docs/api/policy.md` / `docs/api/policy.en.md`
- API Changelog: `docs/api/changelog.md` / `docs/api/changelog.en.md`
- Rikishi Profile and Head-to-head Update Runbook: `docs/rikishi-profile-refresh-runbook.md`
- Referee and Announcer Data Update Runbook: `docs/official-profile-refresh-runbook.md`

## Overview

- Web root:
  - Home: `/`
  - Past tournaments: `/archives`
  - Rikishi list: `/rikishi`
  - Rikishi profile: `/rikishi/{id}`
  - My rikishi: `/my-rikishi/`
  - Rikishi comparison: `/compare/?ids={id1},{id2}`
  - Referee directory: `/gyoji/`
  - Referee profile: `/gyoji/{id}/`
  - Announcer directory:…

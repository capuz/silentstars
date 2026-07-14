---
repo: "itousouta15/itousouta15.tw"
name: "itousouta15.tw"
description: "My personal website"
readmeQualityOk: true
url: "https://github.com/itousouta15/itousouta15.tw"
homepage: "https://itousouta15.tw/"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [69, 31]
topics: ["nextjs", "typescript", "website"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-27T15:07:42Z"
lastCommitAt: "2026-07-14T05:54:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["itousouta15", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d71af8430880336d31254d28c6c654f3705f2c708d8033fd27668e00ff2c4f2/itousouta15/itousouta15.tw"
---

# itouSouta.me

English | [繁體中文](https://github.com/itousouta15/itousouta15.tw/blob/HEAD/README.zh.md)

Personal website of itouSouta / 郭家睿 / 伊藤蒼太, live at [itouSouta.me](https://itouSouta.me).

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Plain CSS (single global stylesheet, CSS custom properties) |
| Data | Vercel KV (Redis) — Discord-sourced posts; Threads API — synced posts; GitHub API — repository info; Last.fm API — top albums |
| Real-time | [Lanyard API](https://github.com/Phineas/lanyard) — Discord presence |
| Deployment | Vercel |

No UI library, no CSS-in-JS, no component framework.

## Pages

| Route | Description |
|---|---|
| `/` | Home — profile card, hero, tech tiles, bento nav grid, GitHub contribution graph |
| `/about` | About — bio, stats, motto, and two Last.fm/likes teaser cards (top anime, top album) |
| `/thoughts` | 雜談 — feed merging Discord slash-command posts, synced Threads posts, and GitHub events |
| `/likes` | Likes — searchable, tag-filtered grid of novels, manga, and anime; Last.fm top-albums preview row |
| `/likes/[category]` | Category detail — full list with carousel…

---
repo: "capuz/silentstars"
name: "silentstars"
description: "Surfaces the open source projects building quietly — ranked by signal, not star count."
readmeQualityOk: true
url: "https://github.com/capuz/silentstars"
homepage: "https://capuz.github.io/silentstars?ref=githubrepo"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [49, 36]
topics: ["astro", "bluesky-bot", "developer-tools", "github-actions", "github-pages", "open-source", "oss-discovery", "typescript"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-20T03:49:46Z"
lastCommitAt: "2026-10-09T18:56:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["github-actions[bot]", "capuz"]
openGraphImageUrl: "https://opengraph.githubassets.com/787b62b0b20720d0c97bbd89416dfcdf9835220444984e2df8600d191eaf5573/capuz/silentstars"
---

# SilentStars

> Not famous. Not abandoned. Just building.

A static site that surfaces open source projects that are **alive but invisible** — newborns, solo builders, projects that came back from the edge. Ranked by how much they deserve attention, not by star count.

**Live:** https://capuz.github.io/silentstars/?ref=githubrepo

---

## What this is

A directory of open source projects that are actively maintained but under-recognized. Every night the pipeline scores each tracked project on two axes — `healthScore` (is it alive right now?) and `undervaluedScore` (signal relative to reach) — classifies it into one of 7 vital states, and tags it with behavioral signals (`solo_builder`, `hidden_gem`, `fork_magnet`, `funded`, etc.) that drive the home page sections. One project is highlighted daily on Bluesky ([@silentstars-radar.bsky.social](https://bsky.app/profile/silentstars-radar.bsky.social)). ~280 projects are tracked as of this writing.

---

## Stack

- [Astro](https://astro.build) + TypeScript (content collections)
- GitHub Actions (nightly discover → collect → build → deploy)
- GitHub Pages — zero cost, zero backend

---

## How projects get in

### 1. Auto-discovery…

---
repo: "tadoku/tadoku"
name: "tadoku"
description: "Tadoku is a friendly foreign-language reading contest aimed at building a habit of reading in your non-native languages."
readmeQualityOk: true
url: "https://github.com/tadoku/tadoku"
homepage: "https://tadoku.app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [45, 44]
topics: ["language-learning", "contest-platform"]
stars: 28
forks: 7
openIssues: 35
closedIssues: 267
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2019-01-08T11:18:02Z"
lastCommitAt: "2026-11-09T04:36:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 64
maintainers: ["antonve", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/481da187131fa558b83c3fdba2926df15abf3ab62b7f3dba792e197bd6c60fc6/tadoku/tadoku"
---

# Tadoku Monorepo

Developer documentation lives in [`docs/docs`](https://github.com/tadoku/tadoku/blob/HEAD/docs/docs) and is published at https://tadoku.github.io/tadoku/.

## Dev Environment

Branches run on the shared `homelab-talos-dev` cluster with dev-cli. Installation,
branch tenants, seed accounts, routing and cleanup are in
[Development environment](https://github.com/tadoku/tadoku/blob/HEAD/docs/docs/develop/environment.md).
For agent-driven live edits, use the [dev-cli skill](https://github.com/tadoku/tadoku/blob/HEAD/.agents/skills/dev-cli/SKILL.md)
(`$dev-cli` where repository skill discovery is supported).

To verify a change in the browser, follow the
[verify-tadoku skill](https://github.com/tadoku/tadoku/blob/HEAD/.agents/skills/verify-tadoku/SKILL.md) (`$verify-tadoku`
where repository skill discovery is supported) and its
[feature map](https://github.com/tadoku/tadoku/blob/HEAD/.agents/skills/verify-tadoku/references/features/README.md).

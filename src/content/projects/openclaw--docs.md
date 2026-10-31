---
repo: "openclaw/docs"
name: "docs"
description: "OpenClaw docs + translation"
readmeQualityOk: true
url: "https://github.com/openclaw/docs"
homepage: "https://docs.openclaw.ai"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["docs", "openclaw"]
stars: 76
forks: 56
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 25
recentReleases: 0
createdAt: "2026-04-05T08:03:25Z"
lastCommitAt: "2026-10-31T01:59:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 41
maintainers: ["openclaw-docs-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb91f4f2745c99e66c6a31d107e18d0e670a79b0173ee15c23171b6ae5285783/openclaw/docs"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# openclaw-docs

Website UI, translations, and publishing for the OpenClaw docs site.

English content and navigation are authored in [`openclaw/openclaw`](https://github.com/openclaw/openclaw), under `docs/`, and synced here. This repository owns the current website renderer, design, search, and hosting.

## Support

For official OpenClaw support, visit [community.openclaw.ai](https://community.openclaw.ai/). Use this repository's issues for reproducible problems with the docs website, renderer, translations, or publishing. Report security vulnerabilities through the project's private security reporting process, not the public support forum.

## How it works

1. English docs are authored in `openclaw/openclaw`.
2. `openclaw/openclaw/.github/workflows/docs-sync-publish.yml` mirrors the docs tree into this repo.
3. This repo maintains the website UI and stores the synced docs tree plus generated locale output.
4. `openclaw/docs/.github/workflows/translate-incremental.yml` debounces normal docs changes, while `translate-all.yml` handles full reconciliation for glossary changes, weekly schedule, release dispatch, or manual dispatch.
5. `.github/workflows/r2-pages.yml` builds the full…

---
repo: "openclaw/docs"
name: "docs"
description: "OpenClaw docs + translation"
readmeQualityOk: true
url: "https://github.com/openclaw/docs"
homepage: "https://docs.openclaw.ai"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [52, 41]
topics: ["docs", "openclaw"]
stars: 76
forks: 52
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2026-04-05T08:03:25Z"
lastCommitAt: "2026-09-29T08:10:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 38
maintainers: ["openclaw-docs-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04622d60280a47fe0bbcac8756e869a4eae4359e5df689c4bbf5efe6aeb7bcd7/openclaw/docs"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# openclaw-docs

Website UI, translations, and publishing for the OpenClaw docs site.

English content and navigation are authored in [`openclaw/openclaw`](https://github.com/openclaw/openclaw), under `docs/`, and synced here. This repository owns the current website renderer, design, search, and hosting.

## How it works

1. English docs are authored in `openclaw/openclaw`.
2. `openclaw/openclaw/.github/workflows/docs-sync-publish.yml` mirrors the docs tree into this repo.
3. This repo maintains the website UI and stores the synced docs tree plus generated locale output.
4. `openclaw/docs/.github/workflows/translate-incremental.yml` debounces normal docs changes, while `translate-all.yml` handles full reconciliation for glossary changes, weekly schedule, release dispatch, or manual dispatch.
5. `.github/workflows/r2-pages.yml` builds the full unpruned static site and uploads changed objects to Cloudflare R2.
6. `.github/workflows/pages.yml` deploys the small Cloudflare Worker router that preserves clean URLs and markdown negotiation while reading docs from R2.

## Translation behavior

- Locale pages under `docs/<locale>/**` are generated output.
- Each translated page stores…

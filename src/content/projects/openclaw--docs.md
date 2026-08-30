---
repo: "openclaw/docs"
name: "docs"
description: "OpenClaw docs + translation"
readmeQualityOk: true
url: "https://github.com/openclaw/docs"
homepage: "https://docs.openclaw.ai"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 42]
topics: ["docs", "openclaw"]
stars: 74
forks: 49
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 54
recentReleases: 0
createdAt: "2026-04-05T08:03:25Z"
lastCommitAt: "2026-08-30T09:25:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 38
maintainers: ["openclaw-docs-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8a2410964b94cfa25f92cda32c2f87689158f415e6b4533c3418fdcc86a1d82/openclaw/docs"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# openclaw-docs

Mirror repo for the published OpenClaw docs site.

Source of truth lives in [`openclaw/openclaw`](https://github.com/openclaw/openclaw), under `docs/`.

## How it works

1. English docs are authored in `openclaw/openclaw`.
2. `openclaw/openclaw/.github/workflows/docs-sync-publish.yml` mirrors the docs tree into this repo.
3. This repo stores the published docs tree plus generated locale output.
4. `openclaw/docs/.github/workflows/translate-incremental.yml` debounces normal docs changes, while `translate-all.yml` handles full reconciliation for glossary changes, weekly schedule, release dispatch, or manual dispatch.
5. `.github/workflows/r2-pages.yml` builds the full unpruned static site and uploads changed objects to Cloudflare R2.
6. `.github/workflows/pages.yml` deploys the small Cloudflare Worker router that preserves clean URLs and markdown negotiation while reading docs from R2.

## Translation behavior

- Locale pages under `docs/<locale>/**` are generated output.
- Each translated page stores `x-i18n.source_hash`.
- The translate workflow computes a pending file list before calling the model.
- If no English source hashes changed, the workflow skips the…

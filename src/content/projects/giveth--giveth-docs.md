---
repo: "Giveth/giveth-docs"
name: "giveth-docs"
description: "Documentation and Guides for Giveth.io"
readmeQualityOk: true
url: "https://github.com/Giveth/giveth-docs"
homepage: "https://giveth-docs.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript", "Python"]
languagePcts: [34, 25, 20]
stars: 37
forks: 36
openIssues: 3
closedIssues: 10
watchers: 16
contributors: 31
recentReleases: 0
createdAt: "2020-11-30T11:45:37Z"
lastCommitAt: "2026-09-25T09:03:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 53
maintainers: ["geleeroyale", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78173c253919a55f78992e5a7674a7f61a6d1d9946e046bcd77f140654ba938d/Giveth/giveth-docs"
---

# Giveth Docs

The site at [docs.giveth.io](https://docs.giveth.io). Content lives in Notion;
this repo turns it into a static site served from GitHub Pages.

This replaces a paid hosted service that rendered the same Notion workspace.
The background, the decisions and the salvaged assets are in
[NOTION-RENDERER-PLAN.md](https://github.com/Giveth/giveth-docs/blob/HEAD/NOTION-RENDERER-PLAN.md).

## How it works

```
Notion  ──►  scripts/fetch-notion.mjs  ──►  content/ + public/notion-assets/
                     │                                │
                     ▼                                ▼
          scripts/sync-media.sh              next build (static export)
                     │                                │
                     ▼                                ▼
          DigitalOcean Space (videos)    gh-pages  ──►  docs.giveth.io
```

**The built site never contacts Notion.** Pages and images are committed to
this repo, so a slow or unreachable Notion API cannot produce a half-empty page.
Pages are plain HTML files.

**Videos and other files live on a DigitalOcean Space**, not in the repo — they
are too large to commit, and Notion's own links to them expire…

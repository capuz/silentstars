---
repo: "f/wvw.dev"
name: "wvw.dev"
description: "The distributed app store for vibe-coded projects. Federated, AI-curated, fully static on GitHub Pages."
url: "https://github.com/f/wvw.dev"
homepage: "https://wvw.dev"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [54, 30]
topics: ["agentic-workflows", "app-store", "fal-ai", "federated", "github-actions", "github-pages", "open-source", "pwa", "static-site", "vibe-coding"]
stars: 77
forks: 46
openIssues: 4
closedIssues: 6
watchers: 1
contributors: 47
recentReleases: 0
createdAt: "2026-03-12T17:06:14Z"
lastCommitAt: "2026-07-03T12:40:30Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 87
undervaluedScore: 38
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfb51c48c9837db8da4eadc0c66f8cf21132dd013ac9110852f07a0c27318e54/f/wvw.dev"
---

</p>

<h1 align="center">World Vibe Web</h1>

  <em>The distributed app store for vibe-coded projects.</em>
</p>

</p>

---

World Vibe Web is a **federated app store** for open-source, vibe-coded projects. There is no central authority — anyone with a GitHub repo can publish apps. WVW aggregates them all into one browsable catalog at [wvw.dev](https://wvw.dev).

No gatekeeping. No review queue. No 30% cut. Just open-source apps, discoverable in one place.

## The Architecture

WVW follows a federated model. Each developer or team maintains their own `apps.json` in their own repo. WVW doesn't host your apps — it indexes them.

```
Your repo (apps.json)    ─┐
Another repo (apps.json)  ├──→  build.sh  ──→  unified apps.json  ──→  wvw.dev
More repos (apps.json)   ─┘
```

1. **`stores.json`** lists all registered store sources — GitHub repo paths or direct URLs
2. A GitHub Action runs **`build.sh`** every 6 hours, fetching each store's `apps.json`
3. Apps are merged, deduplicated, enriched with live GitHub stats, and written to a unified `apps.json`
4. The static site reads this file and renders the catalog — no server, no database

Every store is equal. Your apps sit alongside…

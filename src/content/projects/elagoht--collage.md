---
repo: "Elagoht/collage"
name: "collage"
description: "A Go framework for server-rendered pages composed from cached fragments. No dependencies."
readmeQualityOk: true
url: "https://github.com/Elagoht/collage"
homepage: "https://collage.furkanbaytekin.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["go", "golang", "html", "server-side-rendering", "ssr", "web-framework"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-22T12:49:49Z"
lastCommitAt: "2026-10-16T08:26:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["Elagoht"]
openGraphImageUrl: "https://opengraph.githubassets.com/eff6112748e11203785198e3a3727b95b44b648892f1d1852d8450cb75b0f91d/Elagoht/collage"
---

# collage

A Go framework for server-side, component-based rendering.

**Documentation: [collage.furkanbaytekin.dev](https://collage.furkanbaytekin.dev)** — the guide,
from a first page to deployment. The site is itself a collage application, exported to static
files; its source is [Elagoht/collage-docs](https://github.com/Elagoht/collage-docs).

A page is a **layout fragment** wrapped around a **content fragment**, and a
fragment is a template plus an optional data handler plus the slots it exposes to
its children. Fragments compose; pages are configuration. Output is cached by
dependency tag and invalidated by tag, not by guessing TTLs.

Not everything a site serves is HTML, so two things beside pages: **documents** —
routed, cacheable non-HTML responses such as a sitemap, a feed or a `robots.txt`,
whose handler returns bytes — and **assets**, a mounted `fs.FS` served with
`Range` support and its own `Cache-Control`.

No dependencies: the standard library, and nothing else. Go 1.26.

**Status: pre-1.0.** The API can still change between minor versions. Every
change that breaks an application is listed first, under **Breaking**, in…

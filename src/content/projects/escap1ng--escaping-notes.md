---
repo: "Escap1ng/Escaping-Notes"
name: "Escaping-Notes"
description: "Escap1ng's personal blog and journal · articles, collections, updates, gallery, projects — a long exposure of star trails."
originalDescription: "Escap1ng's personal blog and journal · articles, collections, updates, gallery, projects — a long exposure of star trails."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Escap1ng/Escaping-Notes"
homepage: "https://escaping.top"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [49, 34]
topics: ["blog", "canvas", "chinese", "markdown", "personal-blog", "python", "self-hosted", "vite", "vue3", "star-trails"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-09-01T01:20:05Z"
lastCommitAt: "2026-11-07T16:12:02Z"
lastReleaseAt: "2026-10-30T15:56:22Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 60
maintainers: ["Escap1ng"]
openGraphImageUrl: "https://opengraph.githubassets.com/072626dd8d7834538ab7a0969b442c071fe3c2d90ec4e7a953feb94c9eeb6a83/Escap1ng/Escaping-Notes"
---

# Escaping Notes · Escape Notes

**STAR TRAILS · A long exposure of the night sky**

[**Try it online → escaping.top**](https://escaping.top)

[Chinese](https://github.com/Escap1ng/Escaping-Notes/blob/HEAD/README.md) · [English](https://github.com/Escap1ng/Escaping-Notes/blob/HEAD/README.en.md)

Left: dark / Right: light. Neither image is a screenshot. Both are offline-recalculated exposures, computed with the site's same set of constants (`npm run art:build`). They draw only the star-trail layer, and they recompute the steady-state exposure that users with `prefers-reduced-motion` see. The output applies a ×2.8 / ×1.6 print-gain step, so the site actually looks darker than these two images.

A personal site that turns a blog into a camera long exposure: the homepage is a star-trail long exposure that accelerates as you scroll, articles are sorted by time, and collections are grouped by theme. It is purely static, finalized at build time, and pushing publishes it.

**Tech stack**: Vue 3 · Vue Router 4 · Vite 5 · Canvas 2D. At runtime there is no backend, third-party UI library, or font CDN.

**Contents**

- [This camera is counting time](#这台相机在数时间)
- [Interface](#界面)
- [Two…

---
repo: "4matic/trackparse"
name: "trackparse"
description: "Parse messy music track titles into structured data: artists with roles, feat credits, remixers, versions (remix, VIP, extended, live, remaster) and junk, plus whole tracklists. One spec, TypeScript and Python, zero dependencies."
readmeQualityOk: true
url: "https://github.com/4matic/trackparse"
homepage: "https://4matic.github.io/trackparse/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 30]
topics: ["artist", "dj", "featuring", "filename-parser", "id3", "javascript", "metadata", "music", "music-metadata", "parser"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T19:12:05Z"
lastCommitAt: "2026-11-11T11:20:37Z"
lastReleaseAt: "2026-10-12T09:56:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 58
maintainers: ["4matic", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1374b86fc53731fb5a7c1ac6a05c1b185d8130d1660a1ad44e98fc3b95faa49/4matic/trackparse"
---

# trackparse

**Turn messy track names into structured data: who made it, who's featured, who remixed it, and what's just noise.**

**[Documentation](https://4matic.github.io/trackparse/)** · **[Playground](https://4matic.github.io/trackparse/playground/)** · [Install](#install) · [Quick start](#quick-start) · [What it understands](#what-it-understands) · [Tracklists](#tracklists) · [How it's tested](#how-its-tested) · [API](#api) · [Spec](https://github.com/4matic/trackparse/blob/HEAD/spec/SPEC.md)

```text
01. Wilkinson ft. Becky Hill & Tom Cane - Afterglow (Sub Focus VIP Remix) [Official Video]
└┬┘ └───┬───┘ └───────────┬───────────┘   └───┬───┘ └─────────┬─────────┘ └───────┬──────┘
 │      │                 │                   │               │                   │
 position 1               featured ×2         title           remix · Sub Focus · vip
        │                                                                         │
        primary                                                                   junk: video
```

Most title parsers give you `["Wilkinson ft. Becky Hill & Tom Cane", "Afterglow (Sub Focus VIP Remix)"]`
and call it a day. Or they "clean" the string…

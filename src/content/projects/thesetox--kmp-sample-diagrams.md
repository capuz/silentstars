---
repo: "TheSetox/kmp-sample-diagrams"
name: "kmp-sample-diagrams"
description: "Sample diagram when using Kotlin Multiplatform."
readmeQualityOk: true
url: "https://github.com/TheSetox/kmp-sample-diagrams"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [44, 43]
topics: ["kotlin", "kotlin-library", "kotlin-multiplatform"]
stars: 29
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-13T14:51:56Z"
lastCommitAt: "2026-08-21T04:11:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 29
maintainers: ["TheSetox"]
openGraphImageUrl: "https://opengraph.githubassets.com/c10d0038c585b191d8f3ab4ebc3c2113a87867972fb18f8dcb9f58801b30d541/TheSetox/kmp-sample-diagrams"
---

# KMP Sample Diagrams

Kotlin Multiplatform architecture diagrams and runnable sample projects updated for the 2026 KMP default structure and AGP 9.

The old PNG diagrams are preserved on the `feature/legacy-png-reference` branch, so the refreshed version remains reviewable without losing the previous reference material.

## What Changed

- Editable Mermaid source lives in [`diagrams/`](https://github.com/TheSetox/kmp-sample-diagrams/blob/HEAD/diagrams/) and is rendered into committed SVG images under [`diagrams/images/`](https://github.com/TheSetox/kmp-sample-diagrams/blob/HEAD/diagrams/images/).
- [`index.html`](https://github.com/TheSetox/kmp-sample-diagrams/blob/HEAD/index.html) loads every generated image listed in [`diagrams/manifest.json`](https://github.com/TheSetox/kmp-sample-diagrams/blob/HEAD/diagrams/manifest.json), with links back to its Mermaid source.
- Samples use Android, iOS, and desktop only.
- Every sample `iosApp` contains a runnable SwiftUI `iosApp.xcodeproj` with an `iosApp` scheme.
- No `webApp` and no `server` modules are included.
- Shared KMP code lives in KMP library modules. Platform entry points live in `androidApp`, `iosApp`, and `desktopApp`.
-…

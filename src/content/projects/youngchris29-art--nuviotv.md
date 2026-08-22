---
repo: "youngchris29-art/NuvioTV"
name: "NuvioTV"
description: "Native tvOS (Apple TV) port of NuvioMobile, reusing its shared Kotlin business logic with a new SwiftUI focus-engine frontend"
readmeQualityOk: true
url: "https://github.com/youngchris29-art/NuvioTV"
homepage: "https://nuvio.tv"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [53, 43]
stars: 23
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T04:14:10Z"
lastCommitAt: "2026-08-22T04:07:41Z"
lastReleaseAt: "2026-08-04T01:46:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 40
maintainers: ["youngchris29-art", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0b109d03f62d4ea00be4b88b51a4b94fe52b4312bc305200710eabca81f298e/youngchris29-art/NuvioTV"
---

<br />
  <br />

  <p>
    A native Apple TV client for the Nuvio media hub — SwiftUI on top of a shared Kotlin Multiplatform core.
    <br />
    Stremio addon ecosystem • Built for the tvOS focus engine &amp; Siri Remote
  </p>

</div>

## About

**NuvioTV** is a native **tvOS (Apple TV)** port of [Nuvio](https://github.com/NuvioMedia/NuvioMobile). It brings Nuvio's playback-focused experience — the Stremio addon ecosystem, catalogs, watch progress, collections, cloud library, debrid, and Trakt — to the living room with an interface designed from the ground up for the **tvOS focus engine** and the **Siri Remote**.

Rather than port the touch UI, this fork keeps only what travels well: the proven, Compose-free **domain and data layer** from NuvioMobile is lifted into a UI-free Kotlin Multiplatform framework — **`SharedCore`** — and a brand-new **SwiftUI** frontend is built on top of it. The result is one shared business-logic core across mobile and TV, with a purpose-built 10-foot experience on Apple TV.

> **Lineage:** the original *NuvioTV* was a React Native app; it was rewritten as [**NuvioMobile**](https://github.com/NuvioMedia/NuvioMobile) (Kotlin / Compose Multiplatform)…

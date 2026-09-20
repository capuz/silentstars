---
repo: "ewanc26/inkwell"
name: "inkwell"
description: "Native reader and writer for Standard.site on AT Protocol — monorepo containing iOS (SwiftUI), Android (Kotlin/Compose), and website (SvelteKit)"
readmeQualityOk: true
url: "https://github.com/ewanc26/inkwell"
homepage: "https://inkwell.ewancroft.uk"
language: "Kotlin"
languages: ["Kotlin", "Swift", "Objective-C"]
languagePcts: [40, 30, 23]
topics: ["agpl", "android", "at-protocol", "bluesky", "compose", "ios", "kotlin", "monorepo", "standard-site", "swift"]
stars: 11
forks: 0
openIssues: 62
closedIssues: 36
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-19T00:55:32Z"
lastCommitAt: "2026-09-20T08:45:54Z"
lastReleaseAt: "2026-09-08T14:36:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 51
maintainers: ["ewanc26"]
openGraphImageUrl: "https://opengraph.githubassets.com/abd0177efbbedbb760f780b091e366cbf913edb58086695ddc0419d56fd623e9/ewanc26/inkwell"
fundingLinks: ["GITHUB:https://github.com/ewanc26", "KO_FI:https://ko-fi.com/ewancroft"]
---

<h1 align="center">Inkwell</h1>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="iOS/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="iOS/logo-light.svg">
  </picture>
</p>

</p>

A native reader and writer for the [Standard.site](https://standard.site) publishing ecosystem on AT Protocol.

Inkwell is a **native app** available on iOS and Android. This monorepo also contains the marketing/legal site that hosts the app's install sources and OAuth metadata.

The complete release history is available in the [changelog](https://github.com/ewanc26/inkwell/blob/HEAD/RELEASE_NOTES.md).

## Screenshots

</p>
</p>

## Repository structure

| Directory | Purpose |
|-----------|---------|
| `shared/` | Kotlin Multiplatform shared core — format conversion, markdown parsing, facet handling, content models, verification URLs, and constellation deduplication. Consumed by iOS via `InkwellShared.xcframework`; consumed by Android directly. |
| `iOS/` | iOS app (SwiftUI) |
| `Android/` | Android app (Kotlin/Compose) |
| `website/` | Marketing/legal site and OAuth metadata (`inkwell.ewancroft.uk`) |

## Features

- Reads `site.standard.publication` and…

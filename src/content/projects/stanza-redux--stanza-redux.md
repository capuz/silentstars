---
repo: "Stanza-Redux/Stanza-Redux"
name: "Stanza-Redux"
description: "A native ebook reader for iOS and Android based on the Readium toolkit"
url: "https://github.com/Stanza-Redux/Stanza-Redux"
homepage: "http://stanza-redux.app/"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["ebook", "skip"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 8
createdAt: "2025-02-28T16:27:37Z"
lastCommitAt: "2026-06-26T21:32:30Z"
lastReleaseAt: "2026-04-30T14:13:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 71
maintainers: ["marcprux"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e8b4942e2f49c4eb86594552dab866a1ab1b18c8a65d478cf1e2d190b6f4d84/Stanza-Redux/Stanza-Redux"
---

# Stanza Redux

Stanza Redux is a cross-platform ebook reader for iOS and Android, built with [Skip](https://skip.dev) and powered by the [Readium SDK](https://readium.org/development/readium-sdk-overview/). A single Swift codebase powers a platform-native app that utilizes SwiftUI on iOS and Jetpack Compose on Android, while each platform uses its own native Readium toolkit for EPUB parsing, rendering, and navigation.

</div>

## Architecture

Stanza Redux demonstrates how Skip can bridge platform-specific native libraries from a shared codebase. The app is organized into two Swift Package Manager modules:

- **`Stanza`** — The UI layer (SwiftUI views), built in `Sources/Stanza/`
- **`StanzaModel`** — The data layer (database, OPDS parsing, settings), built in `Sources/StanzaModel/`

### Readium Integration

The Readium SDK is published as two independent toolkits:

- [**readium/swift-toolkit**](https://github.com/readium/swift-toolkit) — Used on iOS via Swift Package Manager
- [**readium/kotlin-toolkit**](https://github.com/readium/kotlin-toolkit) — Used on Android via Gradle dependencies

Stanza Redux uses `#if SKIP` / `#if !SKIP` conditional compilation to call the appropriate…

---
repo: "nxoim/evolpagink"
name: "evolpagink"
description: "Jetpack Compose/Multiplatform paging small, fast, easy, customizable, kotlin flow based, and also platform agnostic"
url: "https://github.com/nxoim/evolpagink"
homepage: "https://evolpagink.nxoim.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["compose-multiplatform", "composemultiplatform", "jetpack-compose", "jetpackcompose", "kotlin", "kotlin-multiplatform", "pagination", "pagination-library"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2025-10-09T05:49:24Z"
lastCommitAt: "2026-06-24T00:19:36Z"
lastReleaseAt: "2026-05-30T01:56:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 52
maintainers: ["nxoim"]
openGraphImageUrl: "https://opengraph.githubassets.com/a32e52d4fab150453d1a954dbbf190c357126f70bc50585b22047bb940965f5c/nxoim/evolpagink"
---

![evolpagink](https://img.shields.io/maven-central/v/com.nxoim.evolpagink/core?label=evolpagink)

![badge][badge-ios]
![badge][badge-js]
![badge][badge-jvm]
![badge][badge-linux]
![badge][badge-windows]
![badge][badge-mac]
![badge][badge-tvos]
![badge][badge-watchos]
# evolpagink
Pagination made truly small, truly easy to use. The evil, unknown counterpart of... uhm.. some *other* commonly used pagination library.
> [!IMPORTANT]
> Quick start in [documentation](https://evolpagink.nxoim.com/quick-start/installation).

## how small?
First of all - the amount of source code is small.

But regarding the amount of boilerplate - you define your pageable source:
```kotlin
val pageable = pageable(
    coroutineScope,
    onPage = { index ->
        yourSource.getPage(index)
        // getPage is Flow<List<YourItem>>
    },
    pageItemKey = { item -> item.id },
    strategy = prefetchPageAmount(
        // this strategy will use your ui to fetch
        // items to fill the viewport + prefetch
        // specified minimumPageAmount beyond viewport
        initialPage = { 0 },
        minimumPageAmount = 2
    )
)
```

Aaaaaand then you use it. For example in compose it looks like:…

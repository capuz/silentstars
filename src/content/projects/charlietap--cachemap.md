---
repo: "CharlieTap/cachemap"
name: "cachemap"
description: "A read optimised concurrent map for Kotlin Multiplatform"
readmeQualityOk: true
url: "https://github.com/CharlieTap/cachemap"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 104
forks: 3
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2023-10-14T14:29:31Z"
lastCommitAt: "2026-08-29T17:29:21Z"
lastReleaseAt: "2026-08-22T16:58:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 25
maintainers: ["CharlieTap"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ba66c0208ef238b6497f1b4ae9c215ac9063b960307b424858ef4b6ac95027/CharlieTap/cachemap"
---

# cachemap

---

CacheMap is single writer concurrent hashmap implementation.

Reads from the hashmap can proceed concurrently to writes from any thread with zero coordination necessary... No locks
and no waits

CacheMap implements Kotlin's read-only `Map<K, V>` interface and provides familiar mutation operations, so it can be
used like a normal map for individual reads and writes.

The exception is the `entries`, `keys`, and `values` properties. On a normal map, these return live views backed by the
map's internal storage. CacheMap cannot safely allow those views to escape the protected read in which they were
obtained, because the backing map may subsequently be mutated. These properties therefore throw
`UnsupportedOperationException`.

Instead, we provide the following replacement functions `forEach`, `forEachKey`, or `forEachValue`.

CacheMap is ultimately a thin wrapper around the [left-right concurrency primitive](#leftright).

# Setup

```kotlin
dependencies {
    implementation("io.github.charlietap:cachemap:0.3.0")
    // Or
    implementation("io.github.charlietap:cachemap-suspend:0.3.0")
}
```

# Usage

Instance creation follows the typical Kotlin convention

```kotlin…

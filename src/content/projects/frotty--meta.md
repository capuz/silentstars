---
repo: "Frotty/Meta"
name: "Meta"
description: "Conceptual 2D & 3D Rendering engine built on top of libGDX"
readmeQualityOk: true
url: "https://github.com/Frotty/Meta"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2016-02-19T13:31:38Z"
lastCommitAt: "2026-09-09T08:17:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 66
maintainers: ["Frotty"]
openGraphImageUrl: "https://opengraph.githubassets.com/763f3acedcf39dbb9a73c825441dcae50ed1c7d4a2fe6829974c3e12bea5e6ba/Frotty/Meta"
---

# Meta

Meta is a reusable Kotlin/libGDX runtime layer for JVM games. It combines scene2d UI, reactive state, asset loading,
input routing, dependency injection, persistence, audio, and desktop platform bindings. OxRox is a downstream
consumer; game-specific behavior stays outside this repository.

## Modules

| Module | Purpose |
| --- | --- |
| `runtime` | Platform-neutral engine services, state, assets, input, audio, and UI. |
| `runtime-desktop` | LWJGL3 implementations for desktop games. |
| `editor` | Optional scene and shader editor built on the runtime. |
| `editor-desktop` | Optional desktop editor launcher and UI playground. |

The runtime targets Java 25 and currently builds against Kotlin 2.4.10 and libGDX 1.14.2. The Gradle wrapper is the
authoritative build entry point.

## Use from a game

Pin a tested JitPack commit. Add `runtime` to the core game and `runtime-desktop` only to the desktop launcher:

```groovy
repositories {
    maven { url = 'https://jitpack.io' }
}

dependencies {
    implementation "com.github.Frotty.Meta:runtime:<commit>"
    implementation "com.github.Frotty.Meta:runtime-desktop:<commit>" // desktop launcher only
}
```

Desktop distributions…

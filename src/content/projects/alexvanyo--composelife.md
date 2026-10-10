---
repo: "alexvanyo/composelife"
name: "composelife"
description: "A Game of Life simulator Android app and watchface built with Jetpack Compose"
readmeQualityOk: true
url: "https://github.com/alexvanyo/composelife"
homepage: "http://alex.vanyo.dev/composelife/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [72]
topics: ["android", "jetpack-compose", "kotlin", "testing", "compose-multiplatform", "compose", "ui", "game-of-life", "kotlin-multiplatform", "kotlin-multiplatform-sample"]
stars: 267
forks: 21
openIssues: 38
closedIssues: 303
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2021-06-08T21:08:53Z"
lastCommitAt: "2026-10-10T10:04:49Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 41
maintainers: ["alexvanyo", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0bb7595bd545ed1cf234e1d1556ca7beb29f56e9ea94f8ef83cd720b2213c2f/alexvanyo/composelife"
discussionCount: 2
---

# ComposeLife

**This is not an official Google product**

ComposeLife is a
work-in-progress [Game of Life][wikipedia_gameoflife] simulator
multiplatform app, targeting Android, desktop, and [web][composelife_web].

This project is a personal sandbox of sorts, experimenting with the latest libraries and tools.
These include:

- Written in [Kotlin][kotlin]
- UI written in [Jetpack Compose][jetpack_compose]
  - Mobile Android app, desktop app and web app for exploring Game of Life patterns.
  - Watchface for Wear OS with configuration
  - Custom [adaptive navigation library][navigation]
- [Dependency injection][dependency-injection] using [Metro][metro] and
  [context parameters][context_parameters]
- [AGSL][agsl], [OpenGL](https://developer.android.com/develop/ui/views/graphics/opengl/about-opengl) and [SKSL][sksl] rendering
- Fully functional CI system with GitHub Actions with:
    - Comprehensive automated tests
      - Hierarchical KMP tests shared across platforms
      - Shared [Robolectric][robolectric] and instrumentation tests
      - Minified instrumentation tests with the help of [Keeper][keeper], memory leak checking with
        [LeakCanary][leakcanary])
      -…

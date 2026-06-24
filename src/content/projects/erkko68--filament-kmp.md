---
repo: "Erkko68/filament-kmp"
name: "filament-kmp"
description: "Kotlin Multiplatform 3D graphics wrapper for Google's Filament engine, featuring first-class Compose Multiplatform integration across Android, iOS, Desktop, and Web."
url: "https://github.com/Erkko68/filament-kmp"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [80]
topics: ["android", "compose-multiplatform", "filament", "ios", "jvm", "kotlin", "kotlin-multiplatform", "web"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-10T12:56:55Z"
lastCommitAt: "2026-06-24T00:24:43Z"
lastReleaseAt: "2026-05-30T14:05:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 42
maintainers: ["Erkko68"]
openGraphImageUrl: "https://opengraph.githubassets.com/51e8ca297e8a5aa515578d3c3a2e033e45c6058438c7bfc6ce8330a366f101a0/Erkko68/filament-kmp"
discussionCount: 0
---

# Filament KMP

> [!NOTE]
> **Unofficial project.** This is a community-maintained Kotlin Multiplatform wrapper around [Google's Filament](https://github.com/google/filament). It is not affiliated with, endorsed by, or supported by Google or the Filament team.

> [!WARNING]
> **Pre-release (`0.1.2-beta`).** This is pre-1.0 software and public APIs may still change between releases — the JVM bindings were just rebuilt on Project Panama (FFM, **requires JDK 22+**) and the Web bindings on Karakum. Pin a specific version and read the [release notes](https://github.com/Erkko68/filament-kmp/releases) before upgrading.

**Filament KMP** brings the same physically based renderer that powers Android's Filament to **iOS**, **Desktop/JVM**, and **Web/JS**, with first-class **Compose Multiplatform** integration.

```kotlin
FilamentSceneView(
    modifier       = Modifier.fillMaxSize(),
    cameraState    = rememberCameraState(eye = Position(0f, 1f, 4f)),
    skyboxState    = rememberSkyboxState(SkyboxSource.Color(Color(0.1f, 0.12f, 0.15f))),
    postProcessing = PostProcessing(bloom = Bloom(strength = 0.2f)),
) {
    Light(type = LightManager.Type.DIRECTIONAL, intensity = 100_000f)…

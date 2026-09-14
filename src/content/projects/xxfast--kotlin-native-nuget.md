---
repo: "xxfast/kotlin-native-nuget"
name: "kotlin-native-nuget"
description: "A plugin that packages a Kotlin/Native library as a NuGet package with generated C# bindings, and consumes C# NuGet packages from Kotlin"
readmeQualityOk: true
url: "https://github.com/xxfast/kotlin-native-nuget"
homepage: "https://xxfast.github.io/kotlin-native-nuget/"
language: "Kotlin"
languages: ["Kotlin", "C#"]
languagePcts: [79, 21]
topics: ["gradle", "kotlin", "kotlin-multiplatform", "kotlin-native", "nuget-package"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 34
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-06-11T00:33:57Z"
lastCommitAt: "2026-09-14T09:08:41Z"
lastReleaseAt: "2026-09-09T05:54:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["xxfast"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1265635650/4b4f0164-3c52-46f6-acc7-83d76d1e3763"
---

# kotlin-native-nuget

A plugin that allows you to publish your Kotlin/Native libraries as NuGet packages to be consumed by .NET projects.

## Background

https://www.youtube.com/watch?v=DywUS-qYn6o

Read the announcement: [Bring your KMP library to NuGet](https://medium.com/proandroiddev/bring-your-kmp-library-to-nuget-02e1131a4707)

## Stability

`0.x` and experimental. Anything can change between versions.

The generated bindings are the public API of **your** NuGet package. Your consumers see your version, never the plugin's. A plugin upgrade that changes how Kotlin renders into C# breaks them at your version, not ours.

Pin the plugin version. Diff the generated `Interop.cs` when you bump it.

## Setup

```kotlin
// build.gradle.kts
plugins {
  kotlin("multiplatform")
  id("io.github.xxfast.kotlin.native.nuget") version "<version>"
}

kotlin {
  mingwX64 { binaries { sharedLib { baseName = "mycatlib" } } }
  macosArm64 { binaries { sharedLib { baseName = "mycatlib" } } }
}

nuget {
  publish {
    packageId = "MyCatLib"
    version = "1.0.0"
    authors = "yourname"
    description = "My Kotlin/Native library"
    rootPackage = "com.example.cats"
  }
}
```

Applying the…
